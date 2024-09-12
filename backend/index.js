import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/charging-stations", require("./routes/chargingStationRoutes"));
app.use("/api/sellers", require("./routes/sellerRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
