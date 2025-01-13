import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-green-50 to-white py-32 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            </div>
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="md:w-1/2 animate-fade-in">
                        <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium text-sm mb-6 hover:scale-105 transition-transform cursor-default">
                            #1 EV Resource in Nepal
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Your Gateway to
                            <span className="text-green-600 inline-block hover:scale-105 transition-transform">
                                {" "}
                                Electric{" "}
                            </span>
                            Mobility
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Your comprehensive resource for Electric Vehicles in
                            Nepal. Find charging stations, sellers, brands, and
                            stay updated with the latest EV news.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/charging-stations"
                                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/20"
                            >
                                Find Charging Stations
                            </Link>
                            <Link
                                href="/brands"
                                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all hover:scale-105"
                            >
                                Explore EV Brands
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative animate-fade-in-delayed">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur-2xl opacity-20"></div>
                        <div className="relative transform hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/ev-hero.png"
                                alt="Electric Vehicle Charging"
                                width={300}
                                height={400}
                                className="rounded-2xl "
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
