import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";

const Header = () => {
    return (
        <header className="py-8 text-black">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-3xl">
                        <span className="text-green-400 ">ev</span>nepal
                    </h1>
                    <nav>
                        <ul className="flex justify-between gap-6">
                            <li>
                                <Link href="/charging-stations">
                                    Charging Stations
                                </Link>
                            </li>
                            <li>
                                <Link href="/sellers">Sellers</Link>
                            </li>

                            <li>
                                <Link
                                    href="https://github.com/pradipchaudhary/evnepal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                >
                                    <Github
                                        className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600"
                                        strokeWidth={1.5}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
