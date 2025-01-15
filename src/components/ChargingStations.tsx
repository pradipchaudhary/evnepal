import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

interface ChargingStation {
    id: string;
    name: string;
    location: string;
    status: "Available" | "Busy";
    points: number;
}

const chargingStations: ChargingStation[] = [
    {
        id: "1",
        name: "Kathmandu Central Station",
        location: "New Road, Kathmandu",
        status: "Available",
        points: 4,
    },
    {
        id: "2",
        name: "Patan Hub",
        location: "Lalitpur, Nepal",
        status: "Busy",
        points: 2,
    },
    {
        id: "3",
        name: "Bhaktapur Station",
        location: "Bhaktapur Durbar Square",
        status: "Available",
        points: 3,
    },
];

const ChargingStations: React.FC = () => {
    return (
        <section
            id="chargingstations"
            className="py-20 bg-gradient-to-br from-gray-100 to-gray-200"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900">
                        Charging Stations
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Easily locate EV charging stations across Nepal.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Station Locator */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-10"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                                <FiMapPin className="text-green-500" />{" "}
                                <span>Station Locator</span>
                            </h3>
                            <div className="flex space-x-4 mb-6">
                                <input
                                    type="text"
                                    placeholder="Search by location..."
                                    className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button className="flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all">
                                    <FiSearch className="mr-2" /> Search
                                </button>
                            </div>
                            <div className="h-[300px] bg-gray-100 rounded-xl flex items-center justify-center">
                                <span className="text-gray-400">
                                    Map View Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Available Stations */}
                    <div>
                        <div className="bg-white rounded-3xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Available Stations
                            </h3>
                            <div className="space-y-6">
                                {chargingStations.map((station) => (
                                    <div
                                        key={station.id}
                                        className={`p-6 rounded-xl shadow-lg border ${
                                            station.status === "Available"
                                                ? "border-green-500"
                                                : "border-yellow-500"
                                        } bg-gray-50 hover:shadow-xl transition-shadow`}
                                    >
                                        <h4 className="font-semibold text-lg text-gray-800">
                                            {station.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {station.location}
                                        </p>
                                        <div className="flex items-center mt-3 text-sm space-x-6">
                                            <span
                                                className={`font-medium ${
                                                    station.status ===
                                                    "Available"
                                                        ? "text-green-600"
                                                        : "text-yellow-600"
                                                }`}
                                            >
                                                ● {station.status}
                                            </span>
                                            <span className="text-gray-600">
                                                {station.points} Charging Points
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all">
                                View All Stations
                            </button>
                        </div>

                        <div className="mt-8 bg-green-50 rounded-xl p-6">
                            <h4 className="font-semibold text-green-800 mb-2">
                                Live Updates
                            </h4>
                            <p className="animate-pulse text-green-600 text-sm">
                                ● Updating station availability in real-time...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChargingStations;
