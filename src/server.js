import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API is running" });
});

// API routes
app.use("/api/contact", contactRoutes);

// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
