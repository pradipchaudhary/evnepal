import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get("type");

        let data;
        switch (type) {
            case "news":
                data = await prisma.news.findMany({
                    orderBy: { date: "desc" },
                    take: 12,
                });
                break;
            case "charging-stations":
                data = await prisma.chargingStation.findMany({
                    orderBy: { updatedAt: "desc" },
                });
                break;
            default:
                return NextResponse.json(
                    { error: "Invalid type" },
                    { status: 400 }
                );
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch data" },
            { status: 500 }
        );
    }
}
