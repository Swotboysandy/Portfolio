import { NextResponse } from 'next/server';

// The view count grows on its own — roughly +12 per hour with a gentle organic
// wobble — derived purely from the clock. No file/DB writes: serverless storage
// is ephemeral and wouldn't persist anyway. Deterministic, monotonic, never resets.
export const dynamic = 'force-dynamic';

const ANCHOR_MS = Date.UTC(2026, 5, 11, 0, 0, 0); // 2026-06-11 00:00 UTC (in the past, so it's already climbing)
const ANCHOR_COUNT = 8162; // tuned so "now" lands ~8.4k, matching the prior count
const PER_HOUR = 12; // average views added per hour

function getViews() {
    const hours = Math.max(0, (Date.now() - ANCHOR_MS) / 3_600_000);
    // rate = PER_HOUR + 2*cos(...) stays in [10, 14] → always 10+ added each hour.
    return ANCHOR_COUNT + Math.floor(hours * PER_HOUR + 10 * Math.sin(hours / 5));
}

export async function GET() {
    return NextResponse.json({ count: getViews() });
}
