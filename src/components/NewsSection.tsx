"use client";

import { useScraper } from "@/hooks/useScraper";

export default function NewsSection() {
    const { data: news, isLoading, error } = useScraper("news");

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 py-8">
                Failed to load news. Please try again later.
            </div>
        );
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Latest EV News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">
                                    {new Date(item.date).toLocaleDateString()} •{" "}
                                    {item.source}
                                </p>
                                <h3 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h3>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-700 font-medium"
                                >
                                    Read More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
