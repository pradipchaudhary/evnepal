"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                id="header"
                className={`bg-white/100  sticky top-0 z-50 border-b border-gray-100 left-0 right-0 transition-all duration-300 ${
                    scrolled ? "bg-white/75 " : "bg-transparent"
                }`}
            >
                <div className="  progress bg-gradient-to-r from-green-700 via-green-500 to-green-300 py-1 text-center">
                    <div className="container mx-auto">
                        <div className="font-extralight flex items-center justify-center gap-2">
                            Work in progress. Suggestions at{" "}
                            <Image
                                src="/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="Arrow Right"
                            />
                            <Link
                                href="mailto:chaudharypradip678@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                {" "}
                                chaudharypradip678@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-1">
                    <nav className="flex items-center justify-between h-16">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <Logo />

                            <span className="font-bold text-2xl text-gray-900 group-hover:text-green-600 transition-colors">
                                EV Nepal
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="/charging-stations"
                                className="text-gray-600 hover:text-green-600 transition-all font-medium hover:scale-105"
                            >
                                Charging Stations
                            </Link>
                            <Link
                                href="/brands"
                                className="text-gray-600 hover:text-green-600 transition-all font-medium hover:scale-105"
                            >
                                Brands
                            </Link>
                            <Link
                                href="/sellers"
                                className="text-gray-600 hover:text-green-600 transition-all font-medium hover:scale-105"
                            >
                                Sellers
                            </Link>
                            <Link
                                href="/news"
                                className="text-gray-600 hover:text-green-600 transition-all font-medium hover:scale-105"
                            >
                                News
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/20"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden transition-all duration-300 ease-in-out ${
                            isMenuOpen
                                ? "max-h-96 opacity-100 py-4"
                                : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                    >
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/charging-stations"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium px-2"
                            >
                                Charging Stations
                            </Link>
                            <Link
                                href="/brands"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium px-2"
                            >
                                Brands
                            </Link>
                            <Link
                                href="/sellers"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium px-2"
                            >
                                Sellers
                            </Link>
                            <Link
                                href="/news"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium px-2"
                            >
                                News
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
