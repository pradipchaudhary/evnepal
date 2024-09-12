// controllers/chargingStationController.js
import ChargingStation from "../models/ChargingStation.js";

export const getChargingStations = async (req, res) => {
    try {
        const stations = await ChargingStation.find();
        res.status(200).json(stations);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch charging stations" });
    }
};

export const addChargingStation = async (req, res) => {
    const { name, location, price, vatIncludedPrice, capacity, availability } =
        req.body;
    try {
        const newStation = new ChargingStation({
            name,
            location,
            price,
            vatIncludedPrice,
            capacity,
            availability,
        });
        await newStation.save();
        res.status(201).json(newStation);
    } catch (error) {
        res.status(500).json({ error: "Failed to add charging station" });
    }
};
