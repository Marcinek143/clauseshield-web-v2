"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { triggerCleanup } from "../actions/triggerCleanup";

type FeedbackState =
  | {
      tone: "success" | "error" | "info";
      message: string;
    }
  | null;

type TriggerCleanupButtonProps = {
  isRunning: boolean;
};

const FEEDBACK_STYLES: Record<NonNullable<FeedbackState>["tone"], string> = {
  success:
    "border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-500/30 dark:text-emerald-200 dark:bg-emerald-500/10",
  error:
    "border-red-200 text-red-700 bg-red-50 dark:border-red-500/30 dark:text-red-200 dark:bg-red-500/10",
  info:
    "border-slate-200 text-slate-700 bg-slate-50 dark:border-slate-500/30 dark:text-slate-200 dark:bg-slate-500/10",
};

export default function TriggerCleanupButton({
  isRunning,
}: TriggerCleanupButtonProps) {
  const router = useRouter();
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [isPending, startTransition] = useTransition();

  const handleTrigger = () => {
    setFeedback(null);
    startTransition(async () => {
      try {
        const result = await triggerCleanup();
        if (result.ok) {
          setFeedback({
            tone: "success",
            message: `Cleanup completed. Deleted ${result.deleted} files, ${result.failed} failed.`,
          });
          router.refresh();
          return;
        }

        if (result.reason === "already_running") {
          setFeedback({
            tone: "info",
            message: "Cleanup is already running. Please wait for it to finish.",
          });
          router.refresh();
          return;
        }

        throw new Error("Unexpected cleanup response");
      } catch (error) {
        console.error("Cleanup failed", error);
        setFeedback({
          tone: "error",
          message: "Cleanup failed. Check logs.",
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        className="flex items-center gap-2 h-10 px-5 bg-primary hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-blue-500/30 dark:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-70"
        type="button"
        onClick={handleTrigger}
        disabled={isPending || isRunning}
      >
        <span className="material-symbols-outlined text-[20px]">
          play_circle
        </span>
        {isRunning
          ? "Cleanup in progress..."
          : isPending
          ? "Running cleanup..."
          : "Trigger Cleanup Now"}
      </button>
      {feedback ? (
        <div
          className={`rounded-lg border px-3 py-2 text-xs font-semibold ${FEEDBACK_STYLES[feedback.tone]}`}
          aria-live="polite"
        >
          {feedback.message}
        </div>
      ) : null}
    </div>
  );
}
