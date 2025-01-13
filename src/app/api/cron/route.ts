import { NextResponse } from "next/server";
import {
    scrapeAndSaveNews,
    scrapeAndSaveChargingStations,
} from "@/utils/scraper";

export async function GET(request: Request) {
    try {
        // Verify cron secret if needed
        const { searchParams } = new URL(request.url);
        const secret = searchParams.get("secret");

        if (secret !== process.env.CRON_SECRET) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Perform scraping
        await Promise.all([
            scrapeAndSaveNews(),
            scrapeAndSaveChargingStations(),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Cron job error:", error);
        return NextResponse.json(
            { error: "Failed to update data" },
            { status: 500 }
        );
    }
}
