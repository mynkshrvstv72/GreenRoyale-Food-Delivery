import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for ordering from
          <strong> GreenRoyale</strong>.
        </p>

        <p className="delivery-time">
          🚴 Estimated Delivery:
          <strong> 30 - 40 Minutes</strong>
        </p>

        <div className="success-buttons">

          <Link to="/orders">
            <button>My Orders</button>
          </Link>

          <Link to="/">
            <button className="home-btn">
              Back To Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;