import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";
import "./Orders.css";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (orders.length === 0) {
    return (
      <div className="page orders-page">
        <div className="empty-orders">
          <h2>No Orders Yet 🍔</h2>
          <p>Looks like you haven't ordered anything.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">

      <h1>My Orders</h1>

      {orders.map((order) => (

        <div className="order-card" key={order._id}>

          <h3>Order #{order._id.slice(-6)}</h3>

          <p><strong>Total:</strong> ₹{order.totalPrice}</p>

          <p><strong>Address:</strong> {order.address}</p>

          <p>
  <strong>Payment:</strong> {order.paymentMethod}
</p>

          <p>
            <strong>Status:</strong>{" "}
           <span className={`status ${order.status.toLowerCase()}`}>
  {order.status}
</span>
          </p>

          <div className="order-items">

  {order.items.map((item, index) => (

    <div className="order-item" key={index}>

      <img
        src={item.image}
        alt={item.name}
        className="order-image"
      />

      <div className="order-info">

        <h4>{item.name}</h4>

        <p>Qty : {item.quantity}</p>

      </div>

      <h3>
        ₹{item.price * item.quantity}
      </h3>

    </div>

  ))}

</div>

<p className="order-date">
  {new Date(order.createdAt).toLocaleDateString()}
</p>

        </div>

      ))}

    </div>
  );
}

export default Orders;