"use server";

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

  const response = await fetch("/api/cleanup", {
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
