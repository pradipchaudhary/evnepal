import React from "react";

const News = () => {
    return (
        <section id="news" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Latest EV News & Events
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Stay updated with the latest developments in
                        Nepal&apos;s EV industry
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- News Card 1 --> */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                        <div className="bg-neutral-900 h-48 flex items-center justify-center">
                            <span className="text-white">EV News</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Latest News
                                </span>
                                <span className="text-neutral-500 text-sm ml-4">
                                    June 15, 2024
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900">
                                Nepal Announces New EV Policy
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Government introduces new incentives for
                                electric vehicle adoption...
                            </p>
                            <button className="text-green-500 hover:text-green-600 font-medium inline-flex items-center">
                                Read More
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- News Card 2 --> */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="bg-neutral-900 h-48 flex items-center justify-center">
                            <span className="text-white">Events</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Upcoming Event
                                </span>
                                <span className="text-neutral-500 text-sm ml-4">
                                    July 1, 2024
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900">
                                EV Expo 2024
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Join us at the largest EV expo in Kathmandu
                                featuring...
                            </p>
                            <button className="text-green-500 hover:text-green-600 font-medium inline-flex items-center">
                                Learn More
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- News Card 3 --> */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <div className="bg-neutral-900 h-48 flex items-center justify-center">
                            <span className="text-white">Updates</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Technology
                                </span>
                                <span className="text-neutral-500 text-sm ml-4">
                                    June 20, 2024
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900">
                                New Charging Network Launch
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                Major expansion of charging infrastructure
                                across Nepal...
                            </p>
                            <button className="text-green-500 hover:text-green-600 font-medium inline-flex items-center">
                                Read More
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-neutral-900 rounded-xl p-8 animate__animated animate__fadeIn">
                        <div className="text-center text-white mb-8">
                            <h3 className="text-2xl font-bold mb-4">
                                Stay Updated
                            </h3>
                            <p className="text-neutral-300">
                                Subscribe to our newsletter for the latest EV
                                news and updates
                            </p>
                        </div>
                        <form className="max-w-md mx-auto">
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-lg transition-colors duration-300 animate__animated animate__fadeIn">
                        <span>View All News</span>
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default News;
