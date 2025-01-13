import React from "react";

const Sellers = () => {
    return (
        <section id="sellers" className="py-20 bg-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Authorized EV Sellers
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Connect with trusted EV dealers across Nepal
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Seller 1 --> */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                        <div className="relative">
                            <div className="bg-neutral-900 h-32 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">
                                    Tesla Nepal
                                </span>
                            </div>
                            <div className="absolute -bottom-6 left-6">
                                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-12">
                            <div className="mb-4">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Official Dealer
                                </span>
                            </div>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                    Kathmandu, Nepal
                                </li>
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    +977-1-4444444
                                </li>
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    info@teslanp.com
                                </li>
                            </ul>
                            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-lg transition-colors duration-300">
                                Contact Dealer
                            </button>
                        </div>
                    </div>

                    {/* <!-- Seller 2 --> */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="relative">
                            <div className="bg-neutral-900 h-32 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">
                                    BYD Nepal
                                </span>
                            </div>
                            <div className="absolute -bottom-6 left-6">
                                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-12">
                            <div className="mb-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Premium Dealer
                                </span>
                            </div>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                    Lalitpur, Nepal
                                </li>
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    +977-1-5555555
                                </li>
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    contact@bydnepal.com
                                </li>
                            </ul>
                            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-lg transition-colors duration-300">
                                Contact Dealer
                            </button>
                        </div>
                    </div>

                    {/* <!-- Seller 3 --> */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="relative">
                            <div className="bg-neutral-900 h-32 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">
                                    MG Motors Nepal
                                </span>
                            </div>
                            <div className="absolute -bottom-6 left-6">
                                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-12">
                            <div className="mb-4">
                                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    Authorized Dealer
                                </span>
                            </div>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                    Bhaktapur, Nepal
                                </li>
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                    +977-1-6666666
                                </li>
                                <li className="flex items-center text-sm text-neutral-600">
                                    <svg
                                        className="w-4 h-4 mr-2 text-purple-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                    sales@mgnepal.com
                                </li>
                            </ul>
                            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-lg transition-colors duration-300">
                                Contact Dealer
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-lg transition-colors duration-300 animate__animated animate__fadeIn">
                        <span>View All Sellers</span>
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

export default Sellers;
