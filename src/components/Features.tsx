import React from "react";

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Key Features
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Discover what makes EV Nepal your ultimate EV
                        information hub
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
                        <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            Real-Time Data
                        </h3>
                        <p className="text-neutral-600">
                            Live updates on charging stations, availability, and
                            pricing across Nepal
                        </p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            Charging Locations
                        </h3>
                        <p className="text-neutral-600">
                            Comprehensive map of EV charging stations with
                            detailed information
                        </p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            Price Tracking
                        </h3>
                        <p className="text-neutral-600">
                            Updated charging prices and cost comparisons for
                            different stations
                        </p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            News & Events
                        </h3>
                        <p className="text-neutral-600">
                            Latest updates on EV industry, upcoming events, and
                            announcements
                        </p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.8s" }}
                    >
                        <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            Seller Directory
                        </h3>
                        <p className="text-neutral-600">
                            Complete list of EV sellers with contact information
                            and available models
                        </p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "1s" }}
                    >
                        <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="w-8 h-8 text-teal-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                            Brand Catalog
                        </h3>
                        <p className="text-neutral-600">
                            Detailed information about EV brands and models
                            available in Nepal
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
