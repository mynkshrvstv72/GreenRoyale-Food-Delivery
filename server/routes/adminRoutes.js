const express = require("express");

const router = express.Router();

const {

    addFood,

    deleteFood,

    updateFood

} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

const { admin } = require("../middleware/adminMiddleware");

router.post("/food", protect, admin, addFood);

router.delete("/food/:id", protect, admin, deleteFood);

router.put(

    "/food/:id",

    protect,

    admin,

    updateFood

);

module.exports = router;