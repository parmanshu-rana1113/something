import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slide = searchParams.get("slide");
  const choice = searchParams.get("choice");
  const attempts = searchParams.get("attempts");

  // This log will be visible in the Vercel Dashboard under "Logs"
  // It is a persistent and safe way to track interactions without a database.
  console.log(`[USER_INTERACTION] Slide: ${slide} | Choice: ${choice} | Attempts: ${attempts} | Time: ${new Date().toISOString()}`);

  return NextResponse.json({ success: true });
}
