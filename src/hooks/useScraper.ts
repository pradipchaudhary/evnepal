import { useState, useEffect } from "react";

interface ScrapedData {
    data: any[];
    isLoading: boolean;
    error: Error | null;
}

export function useScraper(type: "news" | "charging-stations"): ScrapedData {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/scrape?type=${type}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                setData(json.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [type]);

    return { data, isLoading, error };
}
