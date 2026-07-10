const authRoutes = require("./routes/authRoutes");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const orderRoutes=require("./routes/orderRoutes");

const connectDB = require("./config/db");
const foodRoutes = require("./routes/foodRoutes");

const app = express();

const favouriteRoutes = require("./routes/favouriteRoutes");

const adminRoutes = require("./routes/adminRoutes");

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/favourites", favouriteRoutes);

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

const { protect } = require("./middleware/authMiddleware");

app.get("/api/profile", protect, (req, res) => {

    res.json(req.user);

});