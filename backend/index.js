import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/news", newsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
