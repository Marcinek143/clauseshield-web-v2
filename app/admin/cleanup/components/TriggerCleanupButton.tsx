"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { triggerCleanup } from "../actions/triggerCleanup";

type FeedbackState =
  | {
      tone: "success" | "error";
      message: string;
    }
  | null;

export default function TriggerCleanupButton() {
  const router = useRouter();
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [isPending, startTransition] = useTransition();

  const handleTrigger = () => {
    setFeedback(null);
    startTransition(async () => {
      try {
        const result = await triggerCleanup();
        setFeedback({
          tone: "success",
          message: `Cleanup completed. Deleted ${result.deleted} files, ${result.failed} failed.`,
        });
        router.refresh();
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
        disabled={isPending}
      >
        <span className="material-symbols-outlined text-[20px]">
          play_circle
        </span>
        {isPending ? "Running cleanup..." : "Trigger Cleanup Now"}
      </button>
      {feedback ? (
        <p
          className={`text-xs font-semibold ${
            feedback.tone === "success"
              ? "text-emerald-600 dark:text-emerald-300"
              : "text-red-600 dark:text-red-300"
          }`}
          aria-live="polite"
        >
          {feedback.message}
        </p>
      ) : null}
    </div>
  );
}
