import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:3001/analytics"); // make sure backend is running
    if (!res.ok) {
      throw new Error("Backend returned " + res.status);
    }
    const data = await res.json();
    return NextResponse.json(data); // must be the array
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
