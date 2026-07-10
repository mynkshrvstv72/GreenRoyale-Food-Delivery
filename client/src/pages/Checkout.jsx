import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../services/orderService";
import "./Checkout.css";
import { toast } from "react-toastify";

function Checkout() {

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const { cart, clearCart } = useContext(CartContext);
  console.log(cart);

    const user = JSON.parse(localStorage.getItem("user"));

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");


  const total = cart.reduce(
  (sum, item) => sum + item.price * (item.quantity || 1),
  0
);

const handlePlaceOrder = async () => {

  if (!name || !email || !phone || !address) {

    toast.error("Please fill all details");

    return;

  }

  try {

    const orderData = {

      items: cart.map(item => ({

        foodId: item._id,

        name: item.name,

        image: item.image,

        price: item.price,

        quantity: item.quantity

      })),

      totalPrice: total,

      address,

      paymentMethod

    };

    await placeOrder(orderData);

    toast.success("🎉 Order Placed Successfully");

    clearCart();

    localStorage.removeItem("cart");

    navigate("/order-success");

  } catch (error) {

    toast.error(

      error.response?.data?.message ||

      "Order Failed"

    );

  }

};

  return (
  <div className="page checkout-page">

    <div className="checkout-container">

      {/* Left Side */}

      <div className="checkout-left">

        <h2>Delivery Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h2 style={{ marginTop: "30px" }}>Payment Method</h2>

<div className="payment-section">

  <label className="payment-option">

    <input
        type="radio"
        value="COD"
        checked={paymentMethod==="COD"}
        onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    <span>💵 Cash on Delivery</span>

</label>

  <label className="payment-option">

    <input
        type="radio"
        value="UPI"
        checked={paymentMethod==="UPI"}
        onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    <span>📱 UPI</span>

</label>

  <label className="payment-option">

    <input
        type="radio"
        value="Card"
        checked={paymentMethod==="Card"}
        onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    <span>💳 Credit / Debit Card</span>

</label>

</div>

      </div>

      {/* Right Side */}

      <div className="checkout-right">

        <h2>Order Summary</h2>

        {cart.map((item) => (
  <div className="summary-item" key={item._id}>
    <img
      src={item.image}
      alt={item.name}
      className="summary-image"
    />

    <div className="summary-info">
      <h4>{item.name}</h4>
      <p>Qty: {item.quantity}</p>
    </div>

    <div className="summary-price">
      ₹{item.price * item.quantity}
    </div>
  </div>
))}

        <hr />

        <div className="summary-total">

          <span>Total</span>

          <h2>₹{total}</h2>

        </div>

        <button
          className="place-order"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>

    </div>

  </div>
);

}

export default Checkout;