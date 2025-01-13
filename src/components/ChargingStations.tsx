import React from "react";

const ChargingStations = () => {
    return (
        <section id="chargingstations" className="py-20 bg-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Charging Stations
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Find EV charging stations across Nepal
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 animate__animated animate__fadeInLeft">
                        <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Station Locator
                            </h3>
                            <div className="bg-neutral-800 p-4 rounded-lg mb-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search by location..."
                                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                                        Search
                                    </button>
                                </div>
                                <div className="h-[300px] bg-neutral-700 rounded-lg flex items-center justify-center">
                                    <span className="text-neutral-400">
                                        Map View Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInRight">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                                Available Stations
                            </h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-green-500 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer">
                                    <h4 className="font-semibold">
                                        Kathmandu Central Station
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        New Road, Kathmandu
                                    </p>
                                    <div className="flex items-center mt-2 text-sm">
                                        <span className="text-green-500 mr-4">
                                            ● Available
                                        </span>
                                        <span>4 Charging Points</span>
                                    </div>
                                </div>

                                <div className="border-l-4 border-yellow-500 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer">
                                    <h4 className="font-semibold">Patan Hub</h4>
                                    <p className="text-sm text-neutral-600">
                                        Lalitpur, Nepal
                                    </p>
                                    <div className="flex items-center mt-2 text-sm">
                                        <span className="text-yellow-500 mr-4">
                                            ● Busy
                                        </span>
                                        <span>2 Charging Points</span>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer">
                                    <h4 className="font-semibold">
                                        Bhaktapur Station
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        Bhaktapur Durbar Square
                                    </p>
                                    <div className="flex items-center mt-2 text-sm">
                                        <span className="text-green-500 mr-4">
                                            ● Available
                                        </span>
                                        <span>3 Charging Points</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg transition-colors duration-300">
                                    View All Stations
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 bg-green-50 rounded-xl p-4">
                            <h4 className="font-semibold text-green-800 mb-2">
                                Live Updates
                            </h4>
                            <div className="animate-pulse">
                                <p className="text-sm text-green-600">
                                    ● Updating station availability in
                                    real-time...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChargingStations;
