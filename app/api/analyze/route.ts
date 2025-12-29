/**
 * 🔒 CONTRACT LOCK — DO NOT CHANGE WITHOUT EXPLICIT REVIEW
 *
 * Route: POST /api/analyze
 * Purpose: Public intake endpoint for /analyze
 *
 * Payload schema version: v1.0
 *
 * This API contract is consumed by Make.com.
 * Any change to payload keys, nesting, or semantics
 * REQUIRES updating Make.com routers and scenarios.
 */
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: true });
}
