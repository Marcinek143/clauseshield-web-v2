"use server";

import { headers } from "next/headers";

export type TriggerCleanupResult = {
  ok: true;
  deleted: number;
  failed: number;
} | {
  ok: false;
  reason: "already_running";
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

  if (response.status === 409) {
    return { ok: false, reason: "already_running" };
  }

  if (response.ok) {
    const data = (await response.json()) as {
      deleted?: number;
      failed?: number;
    };
    return {
      ok: true,
      deleted: data.deleted ?? 0,
      failed: data.failed ?? 0,
    };
  }

  if (response.status >= 500) {
    throw new Error(`Cleanup failed with status ${response.status}`);
  }

  throw new Error(`Unexpected cleanup response status ${response.status}`);
}
