import React from "react";

const Brands = () => {
    return (
        <section id="brands" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Available EV Brands
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Explore electric vehicle brands available in Nepal
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Tesla Card --> */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                        <div className="bg-gradient-to-r from-green-700 to-green-400 h-48 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white">
                                Tesla
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-green-500 font-semibold">
                                    Available
                                </span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    Premium
                                </span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-neutral-600">
                                    • Model 3
                                </p>
                                <p className="text-sm text-neutral-600">
                                    • Model Y
                                </p>
                                <p className="text-sm text-neutral-600">
                                    • Model S
                                </p>
                            </div>
                            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-lg transition-colors duration-300">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* <!-- BYD Card --> */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="bg-gradient-to-r from-green-700 to-green-400  h-48 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white">
                                BYD
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-green-500 font-semibold">
                                    Available
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    Mid-Range
                                </span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-neutral-600">
                                    • ATTO 3
                                </p>
                                <p className="text-sm text-neutral-600">• e6</p>
                                <p className="text-sm text-neutral-600">
                                    • Yuan Plus
                                </p>
                            </div>
                            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-lg transition-colors duration-300">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* <!-- MG Card --> */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="bg-gradient-to-r from-green-700 to-green-400  h-48 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white">
                                MG
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-green-500 font-semibold">
                                    Available
                                </span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                    Popular
                                </span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-neutral-600">
                                    • ZS EV
                                </p>
                                <p className="text-sm text-neutral-600">
                                    • MG4
                                </p>
                                <p className="text-sm text-neutral-600">
                                    • Marvel R
                                </p>
                            </div>
                            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-lg transition-colors duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center animate__animated animate__fadeIn">
                    <button className="inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-lg transition-colors duration-300">
                        <span>View All Brands</span>
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="mt-16 bg-neutral-50 rounded-xl p-8 animate__animated animate__fadeIn">
                    <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                            <p className="text-neutral-900 font-medium">
                                Volkswagen ID
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <p className="text-neutral-900 font-medium">
                                Hyundai Ioniq
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <p className="text-neutral-900 font-medium">
                                Kia EV6
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <p className="text-neutral-900 font-medium">
                                Nissan Leaf
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
