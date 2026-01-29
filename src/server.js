import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API is running" });
});

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      errors: parsed.error.flatten(),
    });
  }

  // For the test: log + return success (later we will save to DB)
  console.log("New contact:", parsed.data);

  return res.json({ ok: true, message: "Message received" });
});

// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
