const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const foodRoutes = require("./routes/foodRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
  res.send("Green Royale Backend Running 🚀");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/test", (req, res) => {
  res.json({ message: "Backend Working" });
});