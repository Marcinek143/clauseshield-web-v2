/**
 * 🔒 CONTRACT LOCK — DO NOT CHANGE WITHOUT EXPLICIT REVIEW
 *
 * Route: POST /api/analyze
 * Purpose: Public intake endpoint for /analyze
 *
 * Payload schema version: v1.0
 *
 * This API contract is consumed by Make.com.
 * Any change to payload keys, nesting, or semantics
 * REQUIRES updating Make.com routers and scenarios.
 */
export const runtime = "nodejs";

import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const getString = (keys: string[]) => {
      for (const key of keys) {
        const value = formData.get(key);
        if (typeof value === "string") {
          return value;
        }
      }
      return "";
    };

    const getBoolean = (keys: string[]) => {
      const value = getString(keys);
      return value === "on" || value === "true" || value === "1";
    };

    const getFiles = () => {
      const values: File[] = [];
      for (const [, value] of formData.entries()) {
        if (value instanceof File && value.size > 0) {
          values.push(value);
        }
      }
      return values;
    };

    const getList = (keys: string[]) => {
      const values: string[] = [];
      for (const key of keys) {
        const entries = formData
          .getAll(key)
          .filter((value): value is string => typeof value === "string");
        values.push(...entries.filter((entry) => entry.trim().length > 0));
      }
      return values;
    };

    const analysisType = getString(["analysis_type", "analysisType"]);
    const normalizedAnalysisType =
      analysisType === "contract" || analysisType === "invoice"
        ? analysisType
        : "";
    const email = getString([
      "user[email]",
      "user.email",
      "email",
      "work_email",
      "workEmail",
    ]);
    const legalAgree = getBoolean([
      "confidentiality_acknowledged",
      "confidentiality_ack",
      "confidentiality",
      "legal_agree",
    ]);
    const detectedFiles = getFiles();
    if (detectedFiles.length === 0) {
      throw new Error("No files received in FormData");
    }
    const contractFiles = detectedFiles;
    const invoiceFiles = detectedFiles;

    if (
      !normalizedAnalysisType ||
      !email ||
      !legalAgree ||
      (normalizedAnalysisType === "contract" && contractFiles.length === 0) ||
      (normalizedAnalysisType === "invoice" && invoiceFiles.length === 0)
    ) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 },
      );
    }

    const schemaVersion = "v1.0";
    const requestId = randomUUID();
    const submittedAt = new Date().toISOString();

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(
      supabaseUrl ?? "",
      supabaseServiceRoleKey ?? "",
    );
    if (!supabaseUrl) {
      throw new Error("SUPABASE_URL missing");
    }
    if (!supabaseServiceRoleKey) {
      throw new Error("SUPABASE_SERVICE_ROLE_KEY missing");
    }
    const filesToUpload =
      normalizedAnalysisType === "contract" ? contractFiles : invoiceFiles;
    const fileKind = normalizedAnalysisType === "contract" ? "contract" : "invoice";

    const fileMetadata = [];
    for (const file of filesToUpload) {
      const storagePath = `${normalizedAnalysisType}/${requestId}/${file.name}`;
      const uploadOptions: {
        upsert: boolean;
        contentType: string;
        metadata: Record<string, string>;
      } = {
        upsert: false,
        contentType: file.type || "application/octet-stream",
        metadata: {
          analysis_type: normalizedAnalysisType,
          request_id: requestId,
          schema_version: schemaVersion,
          submitted_at: submittedAt,
          user_email: email,
        },
      };

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      try {
        const { error: uploadError } = await supabase.storage
          .from("analyze-uploads")
          .upload(storagePath, buffer, uploadOptions);

        if (uploadError) {
          throw new Error(uploadError.message);
        }
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Upload failed");
      }

      const { data: signedData, error: signedError } =
        await supabase.storage
          .from("analyze-uploads")
          .createSignedUrl(storagePath, 60 * 60 * 24);

      if (signedError) {
        throw new Error(signedError.message);
      }
      if (!signedData?.signedUrl) {
        throw new Error("Signed URL missing");
      }

      fileMetadata.push({
        kind: fileKind,
        filename: file.name,
        size: file.size,
        mimetype: file.type,
        storage_path: storagePath,
        signed_url: signedData.signedUrl,
      });
    }

    const payload = {
      analysis_type: normalizedAnalysisType,
      user: {
        full_name: getString(["full_name", "fullName", "full-name"]),
        email,
        organization: getString([
          "organization",
          "firm",
          "firm_organization",
          "firmOrganization",
        ]),
        role: getString(["role"]),
      },
      contract_analysis:
        normalizedAnalysisType === "contract"
          ? {
              document_type: getString(["document_type", "documentType"]),
              jurisdiction: getString(["jurisdiction"]),
            }
          : null,
      invoice_analysis:
        normalizedAnalysisType === "invoice"
          ? {
              related_contract: getString([
                "related_contract",
                "relatedContract",
              ]),
              invoice_issues: getList([
                "invoice_issues",
                "invoiceIssues",
                "invoice_issues[]",
              ]),
              date_range: {
                from: getString([
                  "invoice_date_from",
                  "invoiceDateFrom",
                  "date_from",
                ]),
                to: getString([
                  "invoice_date_to",
                  "invoiceDateTo",
                  "date_to",
                ]),
              },
              notes: getString(["notes", "invoice_notes", "invoiceNotes"]),
              supporting_documents: getBoolean([
                "supporting_docs",
                "supportingDocs",
              ]),
            }
          : null,
      files: fileMetadata,
      meta: {
        schema_version: schemaVersion,
        source: "analyze",
        submitted_at: submittedAt,
        request_id: requestId,
      },
    };

    const webhookUrl = process.env.MAKE_ANALYZE_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Missing Make webhook URL" },
        { status: 500 },
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream service unavailable" },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      request_id: requestId,
      files: fileMetadata,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}
