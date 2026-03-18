import { NextRequest, NextResponse, userAgent } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slide = searchParams.get("slide");
  const choice = searchParams.get("choice");
  const attempts = searchParams.get("attempts");

  const tz = searchParams.get("tz") || 'Unknown TZ';

  // Extract IP and Device info
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown IP';

  const { device, os, browser } = userAgent(request);
  const deviceType = device.type === 'mobile' ? 'Mobile' : device.type === 'tablet' ? 'Tablet' : 'Desktop';
  const deviceInfo = `${deviceType} | ${os.name || 'Unknown OS'} | ${browser.name || 'Unknown Browser'}`;

  // This log will be visible in the Vercel Dashboard under "Logs"
  console.log(`[USER_INTERACTION] IP: ${ip} | TZ: ${tz} | Device: ${deviceInfo} | Slide: ${slide} | Choice: ${choice || 'N/A'} | Attempts: ${attempts || '0'} | Time: ${new Date().toISOString()}`);

  return NextResponse.json({ success: true });
}
