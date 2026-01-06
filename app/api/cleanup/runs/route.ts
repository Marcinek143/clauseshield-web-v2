import { NextResponse } from "next/server";

import { fetchCleanupRuns } from "@/app/admin/cleanup/actions/fetchCleanupRuns";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");
  const pageSize = Number(searchParams.get("pageSize") ?? "5");

  const data = await fetchCleanupRuns(page, pageSize);
  return NextResponse.json(data);
}
