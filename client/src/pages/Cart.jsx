import "./Cart.css";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();

  const {

    cart,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart

  } = useContext(CartContext);

  const total = cart.reduce(

    (sum, item) => sum + item.price * item.quantity,

    0

  );

  if (cart.length === 0) {

    return (

      <div className="cart-page">

        <div className="empty-cart">

          <h1>🛒 Your Cart is Empty</h1>

          <button
            className="checkout-btn"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </button>

        </div>

      </div>

    );

  }

  return (

    <div className="page cart-page">

      <h1>Shopping Cart</h1>

      <div className="cart-container">

        {

          cart.map((item) => (

            <div
              className="cart-item"
              key={item._id}
            >

              <div className="cart-left">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>

                  <p>{item.category}</p>

                  <span>

                    ₹{item.price}

                  </span>

                </div>

              </div>

              <div className="cart-actions">

    <div className="cart-quantity">

        <button onClick={() => decreaseQuantity(item._id)}>-</button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item._id)}>+</button>

    </div>

    <div className="cart-price">
        ₹{item.price * item.quantity}
    </div>

    <button
        className="remove-btn"
        onClick={() => removeFromCart(item._id)}
    >
        🗑 Remove
    </button>

</div>

            </div>

          ))

        }

      </div>

      <div className="cart-total">

        <h2>

          Grand Total : ₹{total}

        </h2>

        <button

          className="checkout-btn"

          onClick={() => navigate("/checkout")}

        >

          Proceed To Checkout

        </button>

      </div>

    </div>

  );

}

export default Cart;