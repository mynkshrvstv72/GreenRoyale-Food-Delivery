const express = require("express");

const router = express.Router();

const {
    addFavourite,
    removeFavourite,
    getMyFavourites
} = require("../controllers/favouriteController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addFavourite);

router.get("/", protect, getMyFavourites);

router.delete("/:id", protect, removeFavourite);

module.exports = router;