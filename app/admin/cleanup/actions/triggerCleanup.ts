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

  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  if (!host) {
    throw new Error("Unable to determine request host for cleanup");
  }

  const protocol =
    headerList.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "production" ? "https" : "http");
  const url = `${protocol}://${host}/api/cleanup`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "x-cleanup-secret": secret,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Cleanup failed with status ${response.status}`);
  }

  const data = (await response.json()) as TriggerCleanupResult;
  return data;
}
