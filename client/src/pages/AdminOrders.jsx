import { useEffect, useState } from "react";

import {

getAllOrders,

updateOrderStatus

} from "../services/orderService";

import "./AdminOrders.css";

function AdminOrders(){

const [orders,setOrders]=useState([]);

const loadOrders=async()=>{

const data=await getAllOrders();

setOrders(data);

};

useEffect(()=>{

loadOrders();

},[]);

const handleStatus=async(id,status)=>{

await updateOrderStatus(id,status);

loadOrders();

};

return(

<div className="page admin-orders">

<h1>All Orders</h1>

{

orders.map(order=>(

<div className="order-card"

key={order._id}>

<h3>{order.user?.name}</h3>

<p>{order.user?.email}</p>

<p>Total : ₹{order.totalPrice}</p>

<p>Items : {order.items.length}</p>

<p>
  <strong>Payment:</strong> {order.paymentMethod}
</p>

<select

value={order.status}

onChange={(e)=>

handleStatus(

order._id,

e.target.value

)

}

>

<option>Pending</option>

<option>Preparing</option>

<option>Out for Delivery</option>

<option>Delivered</option>

</select>

</div>

))

}

</div>

);

}

export default AdminOrders;