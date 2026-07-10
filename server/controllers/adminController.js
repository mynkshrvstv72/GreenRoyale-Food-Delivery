const Food = require("../models/Food");

const addFood = async (req, res) => {

    try {

        const food = await Food.create(req.body);

        res.status(201).json(food);

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            message: error.message
        });

    }

};

const deleteFood = async (req, res) => {

    try {

        await Food.findByIdAndDelete(req.params.id);

        res.json({
            message: "Food Deleted"
        });

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            message: error.message
        });

    }

};

const updateFood = async (req, res) => {

    try {

        const food = await Food.findById(req.params.id);

        if (!food) {

            return res.status(404).json({

                message: "Food Not Found"

            });

        }

        food.name = req.body.name;

        food.price = req.body.price;

        food.category = req.body.category;

        food.image = req.body.image;

        food.description = req.body.description;

        const updatedFood = await food.save();

        res.json(updatedFood);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    addFood,

    deleteFood,

    updateFood

};