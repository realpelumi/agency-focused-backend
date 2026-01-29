import { Router } from "express";
import { contactSchema } from "../validators/contactValidator.js";

const router = Router();

router.post("/", (req, res) => {
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

export default router;
