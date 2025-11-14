import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/petrolstation")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Model
const dailyCollectionSchema = new mongoose.Schema({
  date: String,
  oil_liter_used: Number,
  petrol_liter_used: Number,
  price_per_liter: Number,
  tanker: String,
});

const DailyCollection = mongoose.model("DailyCollection", dailyCollectionSchema);

// POST route
app.post("/api/daily-collection", async (req, res) => {
  try {
    const newEntry = new DailyCollection(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




