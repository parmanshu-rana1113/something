import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Extract IP and Device info
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown IP';
    const { device, os, browser } = userAgent(request);
    const deviceType = device.type === 'mobile' ? 'Mobile' : device.type === 'tablet' ? 'Tablet' : 'Desktop';
    const deviceInfo = `${deviceType} | ${os.name || 'Unknown OS'} | ${browser.name || 'Unknown Browser'}`;

    // This will appear in Vercel's Function Logs / Runtime Logs
    console.log("📍 [USER LOCATION RECEIVED]:", {
      ip,
      tz: data.tz || 'Unknown',
      device: deviceInfo,
      latitude: data.lat,
      longitude: data.lng,
      timestamp: data.timestamp || new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to process location data:", error);
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
