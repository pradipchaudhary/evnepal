// routes/chargingStations.js
import express from "express";
import {
    getChargingStations,
    addChargingStation,
} from "../controllers/chargingStationController.js";

const router = express.Router();

router.get("/", getChargingStations);
router.post("/", addChargingStation);

export default router;
