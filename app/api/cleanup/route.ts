import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const secret = request.headers.get("x-cleanup-secret");
    if (!secret || secret !== process.env.CLEANUP_SECRET) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("file_uploads")
      .select("id,bucket,storage_path")
      .lt("expires_at", now)
      .eq("status", "uploaded");

    if (error) {
      throw error;
    }

    let deleted = 0;
    let failed = 0;

    for (const file of data ?? []) {
      const { error: removeError } = await supabase.storage
        .from(file.bucket)
        .remove([file.storage_path]);

      if (removeError) {
        failed += 1;
        continue;
      }

      const { error: updateError } = await supabase
        .from("file_uploads")
        .update({ status: "deleted", deleted_at: new Date().toISOString() })
        .eq("id", file.id);

      if (updateError) {
        failed += 1;
        continue;
      }

      deleted += 1;
    }

    return NextResponse.json({ success: true, deleted, failed });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
