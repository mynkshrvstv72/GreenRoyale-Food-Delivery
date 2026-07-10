const Order=require("../models/Order");

const placeOrder=async(req,res)=>{

    try{

        const order = await Order.create({

    user:req.user._id,

    items:req.body.items,

    totalPrice:req.body.totalPrice,

    address:req.body.address,

    paymentMethod:req.body.paymentMethod

});

        res.status(201).json(order);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

const getMyOrders=async(req,res)=>{

    try{

        const orders=await Order.find({

            user:req.user._id

        });

        res.json(orders);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find()

            .populate("user", "name email");

        res.json(orders);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

const updateOrderStatus = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({

                message: "Order Not Found"

            });

        }

        order.status = req.body.status;

        await order.save();

        res.json(order);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


module.exports = {

placeOrder,

getMyOrders,

getAllOrders,

updateOrderStatus

};