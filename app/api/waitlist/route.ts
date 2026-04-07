import { NextResponse } from "next/server";

import { addWaitlistEntry, getWaitlistEntries } from "./store";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string }
    | null;

  const normalizedEmail = body?.email?.trim().toLowerCase() ?? "";

  if (!normalizedEmail) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(normalizedEmail)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const entry = addWaitlistEntry(normalizedEmail);

  console.log("Contract AI waitlist signup", {
    email: entry.email,
    total: getWaitlistEntries().length,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
