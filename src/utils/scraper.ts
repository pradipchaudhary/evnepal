import axios from "axios";
import * as cheerio from "cheerio";
import { prisma } from "@/lib/db";
import { CheerioAPI, Element } from "cheerio";

interface NewsItem {
    title: string;
    url: string;
    source: string;
    date: string;
    content?: string | null;
}

export async function scrapeAndSaveNews(): Promise<void> {
    try {
        const sources = [
            "https://kathmandupost.com/tag/electric-vehicles",
            "https://myrepublica.nagariknetwork.com/tag/electric-vehicles",
        ];

        for (const source of sources) {
            const response = await axios.get(source);
            const $ = cheerio.load(response.data);

            // Process items sequentially to avoid race conditions
            const items = $(".article-item").toArray();
            for (const element of items) {
                const $element = $(element);
                const title = $element.find(".title").text().trim();
                const url = $element.find("a").attr("href");
                const date = $element.find(".date").text().trim();

                if (title && url) {
                    const fullUrl = url.startsWith("http")
                        ? url
                        : `${new URL(source).origin}${url}`;

                    // Check if news already exists
                    const existingNews = await prisma.news.findUnique({
                        where: { url: fullUrl },
                    });

                    if (!existingNews) {
                        // Scrape content if needed
                        const content = await scrapeArticleContent(fullUrl);

                        // Save to database
                        await prisma.news.create({
                            data: {
                                title,
                                url: fullUrl,
                                source: new URL(source).hostname,
                                date: new Date(date || Date.now()),
                                content,
                            },
                        });
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error scraping news:", error);
        throw error;
    }
}

async function scrapeArticleContent(url: string): Promise<string | null> {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        return $(".article-content").text().trim();
    } catch (error) {
        console.error(`Error scraping article content from ${url}:`, error);
        return null;
    }
}

interface ChargingStationData {
    name: string;
    location: string;
    price: string;
    available: boolean;
    latitude?: number | null;
    longitude?: number | null;
}

export async function scrapeAndSaveChargingStations(): Promise<void> {
    try {
        const response = await axios.get(
            "https://example.com/charging-stations"
        );
        const $ = cheerio.load(response.data);

        // Process items sequentially to avoid race conditions
        const items = $(".station-item").toArray();
        for (const element of items) {
            const $element = $(element);
            const station: ChargingStationData = {
                name: $element.find(".name").text().trim(),
                location: $element.find(".location").text().trim(),
                price: $element.find(".price").text().trim(),
                available: $element
                    .find(".status")
                    .text()
                    .includes("Available"),
                latitude: parseFloatOrNull(
                    $element.find(".latitude").text().trim()
                ),
                longitude: parseFloatOrNull(
                    $element.find(".longitude").text().trim()
                ),
            };

            // Save to database
            await prisma.chargingStation.create({
                data: station,
            });
        }
    } catch (error) {
        console.error("Error scraping charging stations:", error);
        throw error;
    }
}

function parseFloatOrNull(value: string): number | null {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? null : parsed;
}
