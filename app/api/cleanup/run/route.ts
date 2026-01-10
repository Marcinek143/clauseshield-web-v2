import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabaseServer";

import { executeCleanup } from "../cleanupRunner";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const cronHeader = request.headers.get("x-vercel-cron");
  if (!cronHeader) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  let supabase;
  try {
    supabase = supabaseServer({ useServiceRole: true });
  } catch (error) {
    console.error("Failed to initialize Supabase client", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const { responseBody, responseStatus } = await executeCleanup({
    supabase,
    triggerSource: "vercel-cron",
  });

  return NextResponse.json(responseBody, { status: responseStatus });
}
