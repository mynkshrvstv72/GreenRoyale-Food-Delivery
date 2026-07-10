const express=require("express");

const router=express.Router();

const {

placeOrder,

getMyOrders,

getAllOrders,

updateOrderStatus

}=require("../controllers/orderController");

const {

protect

}=require("../middleware/authMiddleware");

router.post("/",protect,placeOrder);

router.get("/myorders",protect,getMyOrders);

module.exports=router;

const { admin } = require("../middleware/adminMiddleware");

router.get(

"/all",

protect,

admin,

getAllOrders

);

router.put(

"/:id",

protect,

admin,

updateOrderStatus

);