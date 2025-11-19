interface Campaign {
  campaign: string;
  leads: number;
}

// Fetch analytics data from your Next.js API route
export async function fetchAnalyticsData(): Promise<Campaign[]> {
  try {
    const res = await fetch("/api/analytics"); // calls the Next.js API route
    const json = await res.json();

    if (Array.isArray(json)) return json; // ✅ expected format
    if (json.error) throw new Error(json.error); // handle backend error

    throw new Error("Unexpected data format"); // fallback
  } catch (err) {
    console.error("fetchAnalyticsData error:", err);
    return []; // fallback empty array for chart
  }
}
