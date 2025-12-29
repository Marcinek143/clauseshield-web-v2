/**
 * 🔒 LOCKED PAGE — DO NOT MODIFY WITHOUT EXPLICIT REVIEW
 *
 * Route: /analyze
 * Purpose: Public AI intake for contract & invoice analysis
 *
 * This page is production-critical.
 * UI, layout, fields, and behavior are frozen.
 *
 * Allowed changes:
 * - Backend logic (/api/analyze)
 * - AI processing
 * - Make.com workflows
 *
 * Any UI or field changes REQUIRE:
 * - Updated Stitch design
 * - Product review
 *
 * Schema version: v1.0
 */
"use client";

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

type AnalysisType = "contract" | "invoice";

const invoiceIssueOptions = [
  { value: "duplicate_payment", label: "Duplicate Payment" },
  { value: "price_discrepancy", label: "Price Discrepancy" },
  { value: "missing_po_number", label: "Missing PO Number" },
  { value: "tax_calculation", label: "Tax Calculation" },
];

export const ANALYZE_FORM_SCHEMA_VERSION = "v1.0";

export default function AnalyzePage() {
  const [analysisType, setAnalysisType] = useState<AnalysisType>("contract");
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [documentType, setDocumentType] = useState("nda");
  const [jurisdiction, setJurisdiction] = useState("us_ny");
  const [contractFile, setContractFile] = useState<File | null>(null);
  const [invoiceFiles, setInvoiceFiles] = useState<File[]>([]);
  const [relatedContract, setRelatedContract] = useState("");
  const [invoiceIssues, setInvoiceIssues] = useState<string[]>([]);
  const [invoiceDateFrom, setInvoiceDateFrom] = useState("");
  const [invoiceDateTo, setInvoiceDateTo] = useState("");
  const [invoiceNotes, setInvoiceNotes] = useState("");
  const [supportingDocs, setSupportingDocs] = useState(false);
  const [legalAgree, setLegalAgree] = useState(false);

  const isIdentityValid =
    fullName.trim().length > 0 &&
    workEmail.trim().length > 0 &&
    organization.trim().length > 0 &&
    role.trim().length > 0;
  const hasRequiredFiles =
    analysisType === "contract"
      ? Boolean(contractFile)
      : invoiceFiles.length > 0;
  const isFormValid = isIdentityValid && legalAgree && hasRequiredFiles;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("SUBMIT FIRED");
    if (!isFormValid) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append("analysis_type", analysisType);
    formData.append("full_name", fullName.trim());
    formData.append("email", workEmail.trim());
    formData.append("organization", organization.trim());
    formData.append("role", role);
    formData.append(
      "confidentiality_acknowledged",
      legalAgree ? "true" : "false",
    );

    if (analysisType === "contract") {
      formData.append("document_type", documentType);
      formData.append("jurisdiction", jurisdiction);
      if (contractFile) {
        formData.append("contractFiles", contractFile);
      }
    }

    if (analysisType === "invoice") {
      formData.append("related_contract", relatedContract);
      invoiceIssues.forEach((issue) =>
        formData.append("invoice_issues", issue),
      );
      formData.append("invoice_date_from", invoiceDateFrom);
      formData.append("invoice_date_to", invoiceDateTo);
      formData.append("invoice_notes", invoiceNotes);
      formData.append("supporting_docs", supportingDocs ? "true" : "false");
      invoiceFiles.forEach((file) => formData.append("invoiceFiles", file));
    }

    await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="bg-background-light text-[#0d121b] font-display min-h-screen flex flex-col dark:bg-navy-900 dark:text-slate-100">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-[42px] font-black leading-[1.1] tracking-tight text-[#0d121b] dark:text-white">
                Analyze Contracts &amp; Invoices with AI
              </h1>
              <p className="text-lg text-[#4c639a] leading-relaxed max-w-md dark:text-slate-400">
                Securely upload your documents for AI-generated risk and
                discrepancy analysis. Designed for legal and finance teams.
              </p>
            </div>
            <div>
              <div className="inline-flex bg-[#e7ebf3]/60 p-1.5 rounded-xl dark:bg-navy-800/80">
                <label className="cursor-pointer">
                  <input
                    checked={analysisType === "contract"}
                    className="peer sr-only"
                    name="analysis_type"
                    type="radio"
                    value="contract"
                    onChange={() => setAnalysisType("contract")}
                  />
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#4c639a] transition-all peer-checked:bg-white peer-checked:text-[#1354ec] peer-checked:shadow-sm dark:text-slate-300 dark:peer-checked:bg-primary dark:peer-checked:text-white">
                    <span className="material-symbols-outlined text-[20px]">
                      description
                    </span>
                    Contract Analysis
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input
                    checked={analysisType === "invoice"}
                    className="peer sr-only"
                    name="analysis_type"
                    type="radio"
                    value="invoice"
                    onChange={() => setAnalysisType("invoice")}
                  />
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#4c639a] transition-all peer-checked:bg-white peer-checked:text-[#1354ec] peer-checked:shadow-sm dark:text-slate-300 dark:peer-checked:bg-primary dark:peer-checked:text-white">
                    <span className="material-symbols-outlined text-[20px]">
                      receipt_long
                    </span>
                    Invoice Analysis
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4c639a] dark:text-slate-400">
                Trust &amp; Security
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1354ec] dark:bg-blue-900/20">
                    <span className="material-symbols-outlined text-[20px]">
                      lock
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d121b] dark:text-slate-100">
                      Confidential by design
                    </h4>
                    <p className="text-sm text-[#4c639a] mt-1 dark:text-slate-400">
                      Data is encrypted in transit and at rest using AES-256
                      standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1354ec] dark:bg-blue-900/20">
                    <span className="material-symbols-outlined text-[20px]">
                      shield
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d121b] dark:text-slate-100">
                      Enterprise-grade security
                    </h4>
                    <p className="text-sm text-[#4c639a] mt-1 dark:text-slate-400">
                      SOC2 Type II compliant processing environment for
                      sensitive legal data.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1354ec] dark:bg-blue-900/20">
                    <span className="material-symbols-outlined text-[20px]">
                      visibility_off
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d121b] dark:text-slate-100">
                      No obligation analysis
                    </h4>
                    <p className="text-sm text-[#4c639a] mt-1 dark:text-slate-400">
                      Get a preliminary report instantly without mandatory
                      account creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex gap-3 items-start dark:bg-blue-900/10 dark:border-blue-900/40">
              <span className="material-symbols-outlined text-[#1354ec] text-sm mt-0.5 dark:text-primary">
                info
              </span>
              <p className="text-xs text-[#4c639a] leading-normal dark:text-slate-400">
                <strong>Note for users:</strong> Documents are automatically
                purged from our analysis servers after 24 hours unless saved to
                a secure workspace.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-[#e6edf6] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e7ebf3] overflow-hidden dark:bg-navy-800 dark:border-navy-700">
              <div className="px-8 py-6 border-b border-[#e7ebf3] flex justify-between items-center bg-[#edf2f7] dark:border-navy-700 dark:bg-navy-800">
                <h3 className="text-lg font-bold text-[#0d121b] flex items-center gap-2 dark:text-slate-100">
                  <span className="material-symbols-outlined text-[#1354ec] dark:text-primary">
                    upload_file
                  </span>
                  Submit Document
                </h3>
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100 flex items-center gap-1 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Secure Connection
                </span>
              </div>
              <div className="p-8">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                        id="full-name"
                        placeholder="e.g. Sarah Jennings"
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300"
                        htmlFor="work-email"
                      >
                        Work Email
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                        id="work-email"
                        placeholder="sarah@company.com"
                        type="email"
                        value={workEmail}
                        onChange={(event) => setWorkEmail(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300"
                        htmlFor="organization"
                      >
                        Firm / Organization
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                        id="organization"
                        placeholder="e.g. Acme Legal LLP"
                        type="text"
                        value={organization}
                        onChange={(event) => setOrganization(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300"
                        htmlFor="role"
                      >
                        Role
                      </label>
                      <div className="relative">
                        <select
                          className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none appearance-none cursor-pointer dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100"
                          id="role"
                          value={role}
                          onChange={(event) => setRole(event.target.value)}
                        >
                          <option disabled value="">
                            Select your role
                          </option>
                          <option value="legal_counsel">Legal Counsel</option>
                          <option value="finance_manager">
                            Finance Manager
                          </option>
                          <option value="compliance_officer">
                            Compliance Officer
                          </option>
                          <option value="other">Other</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#4c639a] pointer-events-none text-lg dark:text-slate-500">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="border-[#e7ebf3] border-dashed dark:border-navy-700" />
                  {analysisType === "contract" ? (
                    <>
                      <div className="space-y-6" id="contract-details">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-sm font-bold text-[#0d121b] uppercase tracking-wider dark:text-slate-100">
                            Contract Details
                          </h4>
                          <span className="text-xs text-[#4c639a] dark:text-slate-400">
                            Allowed: PDF, DOCX (Max 25MB)
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300"
                              htmlFor="document-type"
                            >
                              Document Type
                            </label>
                            <div className="relative">
                              <select
                                className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none appearance-none cursor-pointer dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100"
                                id="document-type"
                                value={documentType}
                                onChange={(event) =>
                                  setDocumentType(event.target.value)
                                }
                              >
                                <option value="nda">
                                  Non-Disclosure Agreement (NDA)
                                </option>
                                <option value="msa">
                                  Master Services Agreement (MSA)
                                </option>
                                <option value="dpa">
                                  Data Processing Addendum
                                </option>
                                <option value="other">Other</option>
                              </select>
                              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#4c639a] pointer-events-none text-lg dark:text-slate-500">
                                expand_more
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label
                              className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300"
                              htmlFor="jurisdiction"
                            >
                              Jurisdiction
                            </label>
                            <div className="relative">
                              <select
                                className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none appearance-none cursor-pointer dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100"
                                id="jurisdiction"
                                value={jurisdiction}
                                onChange={(event) =>
                                  setJurisdiction(event.target.value)
                                }
                              >
                                <option value="us_ny">
                                  United States (New York)
                                </option>
                                <option value="us_de">
                                  United States (Delaware)
                                </option>
                                <option value="uk">United Kingdom</option>
                                <option value="eu">European Union</option>
                              </select>
                              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#4c639a] pointer-events-none text-lg dark:text-slate-500">
                                expand_more
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative mt-2">
                        <input
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          type="file"
                          onChange={(event) =>
                            setContractFile(event.target.files?.[0] ?? null)
                          }
                        />
                        <div className="w-full border-2 border-dashed border-[#e7ebf3] rounded-xl bg-[#e7ebf3]/20 py-10 flex flex-col items-center justify-center text-center transition-all group-hover:border-[#1354ec]/50 group-hover:bg-[#1354ec]/5 dark:border-navy-700 dark:bg-navy-900/40 dark:group-hover:bg-primary/10">
                          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform dark:bg-navy-800">
                            <span className="material-symbols-outlined text-[#1354ec] text-2xl">
                              cloud_upload
                            </span>
                          </div>
                          <p className="text-sm font-medium text-[#0d121b] dark:text-slate-200">
                            <span className="text-[#1354ec] font-bold dark:text-primary">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-[#4c639a] mt-1 dark:text-slate-400">
                            Supported formats: PDF, DOCX
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-6" id="invoice-section">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-sm font-bold text-[#0d121b] uppercase tracking-wider dark:text-slate-100">
                          Invoice Details
                        </h4>
                        <span className="text-xs text-[#4c639a] dark:text-slate-400">
                          Allowed: PDF, XLS, CSV (Max 25MB)
                        </span>
                      </div>
                      <div className="group relative">
                        <input
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          multiple
                          type="file"
                          onChange={(event) =>
                            setInvoiceFiles(
                              event.target.files
                                ? Array.from(event.target.files)
                                : [],
                            )
                          }
                        />
                        <div className="w-full border-2 border-dashed border-[#e7ebf3] rounded-xl bg-[#e7ebf3]/20 py-10 flex flex-col items-center justify-center text-center transition-all group-hover:border-[#1354ec]/50 group-hover:bg-[#1354ec]/5 dark:border-navy-700 dark:bg-navy-900/40 dark:group-hover:bg-primary/10">
                          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform dark:bg-navy-800">
                            <span className="material-symbols-outlined text-[#1354ec] text-2xl">
                              cloud_upload
                            </span>
                          </div>
                          <p className="text-sm font-medium text-[#0d121b] dark:text-slate-200">
                            <span className="text-[#1354ec] font-bold dark:text-primary">
                              Click to upload invoice(s)
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-[#4c639a] mt-1 dark:text-slate-400">
                            Supported formats: PDF, XLS, XLSX, CSV
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300">
                          Related Contract{" "}
                          <span className="text-[#4c639a] font-normal text-xs ml-1 dark:text-slate-500">
                            (Optional)
                          </span>
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                          placeholder="e.g. MSA-2023-XY"
                          type="text"
                          value={relatedContract}
                          onChange={(event) =>
                            setRelatedContract(event.target.value)
                          }
                        />
                        <p className="text-xs text-[#4c639a] dark:text-slate-500">
                          Reference ID of the governing contract.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300">
                          Invoice Issues to Check
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {invoiceIssueOptions.map((option) => (
                            <label
                              className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-[#e7ebf3] hover:bg-slate-50 transition-colors dark:border-navy-700 dark:hover:bg-navy-700/40"
                              key={option.value}
                            >
                              <input
                                className="rounded border-slate-300 text-[#1354ec] focus:ring-[#1354ec] h-4 w-4 dark:border-navy-700"
                                type="checkbox"
                                checked={invoiceIssues.includes(option.value)}
                                onChange={() =>
                                  setInvoiceIssues((prev) =>
                                    prev.includes(option.value)
                                      ? prev.filter(
                                          (value) => value !== option.value,
                                        )
                                      : [...prev, option.value],
                                  )
                                }
                              />
                              <span className="text-sm text-[#0d121b] dark:text-slate-200">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300">
                          Invoice Date Range{" "}
                          <span className="text-[#4c639a] font-normal text-xs ml-1 dark:text-slate-500">
                            (Optional)
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <input
                              className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none text-[#4c639a] dark:border-navy-700 dark:bg-navy-900 dark:text-slate-300"
                              placeholder="From"
                              type="date"
                              value={invoiceDateFrom}
                              onChange={(event) =>
                                setInvoiceDateFrom(event.target.value)
                              }
                            />
                            <span className="text-[10px] uppercase font-bold text-[#4c639a] absolute top-[-6px] left-3 bg-[#f5f7fb] px-1 dark:text-slate-500 dark:bg-navy-800">
                              From
                            </span>
                          </div>
                          <div className="relative">
                            <input
                              className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none text-[#4c639a] dark:border-navy-700 dark:bg-navy-900 dark:text-slate-300"
                              placeholder="To"
                              type="date"
                              value={invoiceDateTo}
                              onChange={(event) =>
                                setInvoiceDateTo(event.target.value)
                              }
                            />
                            <span className="text-[10px] uppercase font-bold text-[#4c639a] absolute top-[-6px] left-3 bg-[#f5f7fb] px-1 dark:text-slate-500 dark:bg-navy-800">
                              To
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-[#0d121b] dark:text-slate-300">
                          Notes for Reviewer
                        </label>
                        <textarea
                          className="w-full px-4 py-2.5 rounded-lg border border-[#e7ebf3] bg-[#f5f7fb] focus:ring-2 focus:ring-[#1354ec]/20 focus:border-[#1354ec] transition-all text-sm outline-none dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                          placeholder="Provide any additional context or specific instructions..."
                          rows={3}
                          value={invoiceNotes}
                          onChange={(event) =>
                            setInvoiceNotes(event.target.value)
                          }
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-[#1354ec] focus:ring-[#1354ec] dark:border-navy-700"
                          id="supporting_docs"
                          type="checkbox"
                          checked={supportingDocs}
                          onChange={(event) =>
                            setSupportingDocs(event.target.checked)
                          }
                        />
                        <label
                          className="text-sm font-medium text-[#0d121b] cursor-pointer select-none dark:text-slate-300"
                          htmlFor="supporting_docs"
                        >
                          I have supporting documents (emails, receipts) to
                          attach
                        </label>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg mt-8 dark:bg-navy-800/60">
                    <div className="flex h-6 items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-[#1354ec] focus:ring-[#1354ec] dark:border-navy-700"
                        id="legal_agree"
                        name="legal_agree"
                        type="checkbox"
                        checked={legalAgree}
                        onChange={(event) =>
                          setLegalAgree(event.target.checked)
                        }
                      />
                    </div>
                    <div className="text-sm">
                      <label
                        className="font-medium text-[#0d121b] dark:text-slate-200"
                        htmlFor="legal_agree"
                      >
                        Confidentiality Acknowledgment
                      </label>
                      <p className="text-[#4c639a] text-xs mt-0.5 dark:text-slate-400">
                        I acknowledge that I have the authority to upload this
                        document and agree to the{" "}
                        <a className="text-[#1354ec] hover:underline dark:text-primary" href="#">
                          Terms of Service
                        </a>{" "}
                        &amp;{" "}
                        <a className="text-[#1354ec] hover:underline dark:text-primary" href="#">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      className="w-full flex items-center justify-center gap-2 bg-[#1354ec] hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] dark:bg-primary dark:hover:bg-primary-hover"
                      type="submit"
                      disabled={!isFormValid}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        analytics
                      </span>
                      Analyze my document(s)
                    </button>
                    <p className="text-center text-xs text-[#4c639a] mt-4 dark:text-slate-500">
                      By clicking Analyze, you agree to our standard processing
                      agreement.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
