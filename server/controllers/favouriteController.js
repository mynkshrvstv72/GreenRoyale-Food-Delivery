const Favourite = require("../models/Favourite");

// Add Favourite
const addFavourite = async (req, res) => {

    try {

        const { foodId } = req.body;

        const exists = await Favourite.findOne({
            user: req.user._id,
            food: foodId
        });

        if (exists) {
            return res.status(400).json({
                message: "Already in favourites"
            });
        }

        const favourite = await Favourite.create({
            user: req.user._id,
            food: foodId
        });

        res.status(201).json(favourite);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Remove Favourite
const removeFavourite = async (req, res) => {

    try {

        await Favourite.findOneAndDelete({
            user: req.user._id,
            food: req.params.id
        });

        res.json({
            message: "Removed from favourites"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get My Favourites
const getMyFavourites = async (req, res) => {

    try {

        const favourites = await Favourite.find({
            user: req.user._id
        }).populate("food");

        res.json(favourites);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addFavourite,
    removeFavourite,
    getMyFavourites
};