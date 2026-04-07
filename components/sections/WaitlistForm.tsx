"use client";

import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setErrorMessage("Enter your work email.");
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setErrorMessage("Enter a valid work email.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(payload.error ?? "Unable to join the waitlist.");
        setStatus("idle");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMessage("Unable to join the waitlist.");
      setStatus("idle");
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-[#e7ebf3] bg-[#f8f9fc] p-4 dark:border-navy-700 dark:bg-navy-900/70">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="waitlist-email">
          Work email
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="waitlist-email"
            className="h-12 w-full rounded-xl border border-[#cfd6e7] bg-white px-4 text-sm text-[#0d121b] outline-none transition-all focus:border-[#1354ec] focus:ring-1 focus:ring-[#1354ec] dark:border-navy-700 dark:bg-navy-800 dark:text-slate-100 dark:focus:border-primary dark:focus:ring-primary"
            placeholder="Enter your work email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === "submitting"}
            type="submit"
          >
            {status === "submitting" ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          No spam. Early access only.
        </p>
        {errorMessage ? (
          <p className="text-sm font-medium text-red-600 dark:text-red-300">
            {errorMessage}
          </p>
        ) : null}
        {status === "success" ? (
          <p className="text-sm font-medium text-green-600 dark:text-green-300">
            You&apos;re on the list. We&apos;ll notify you when it&apos;s ready.
          </p>
        ) : null}
      </form>
    </div>
  );
}
