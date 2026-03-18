import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // This will appear in Vercel's Function Logs / Runtime Logs
    console.log("📍 [USER LOCATION RECEIVED]:", {
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
