const Food = require("../models/Food");

// Get All Foods
const getFoods = async (req, res) => {
  try {
    console.log("GET /api/foods called");

    const foods = await Food.find();

    console.log(foods);

    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add Food
const addFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getFoods,
  addFood,
};