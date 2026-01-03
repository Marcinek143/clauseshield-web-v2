"use server";

import { headers } from "next/headers";

export type TriggerCleanupResult = {
  success: boolean;
  deleted: number;
  failed: number;
};

export async function triggerCleanup(): Promise<TriggerCleanupResult> {
  const secret = process.env.CLEANUP_SECRET;
  if (!secret) {
    throw new Error("CLEANUP_SECRET is not set");
  }

  const headerList = headers();
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "production" ? "https" : "http");
  const baseUrl =
    host
      ? `${protocol}://${host}`
      : process.env.NEXT_PUBLIC_SITE_URL ??
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);

  if (!baseUrl) {
    throw new Error("Unable to determine base URL for cleanup request");
  }

  const response = await fetch(`${baseUrl}/api/cleanup`, {
    method: "POST",
    headers: {
      "x-cleanup-secret": secret,
    },
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error(`Cleanup failed with status ${response.status}`);
  }

  const data = (await response.json()) as TriggerCleanupResult;
  return data;
}
