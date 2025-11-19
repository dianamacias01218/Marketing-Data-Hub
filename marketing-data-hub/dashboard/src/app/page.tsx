"use client"; // needed for useEffect and useState

import { useEffect, useState } from "react";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchAnalyticsData } from "./services/api"; // type-safe API fetch

interface Campaign {
  campaign: string;
  leads: number;
}

export default function Home() {
  const [data, setData] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalyticsData()
      .then(setData)
      .catch((err) => {
        console.error("Fetch failed:", err);
        setError("Failed to load analytics data.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Marketing Dashboard
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Data aggregated from Google Analytics, HubSpot, Meta Ads, and LinkedIn Ads.
          </p>

          {/* Chart */}
          <div className="w-full h-64">
            {loading ? (
              <p className="text-center text-gray-500">Loading chart...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="campaign" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#FAD637" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
