import "./FoodCard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    toast.success(`${food.name} added to cart`);
  };

  return (
    <div className="food-card">

      <div className="food-image-box">

        <span className="offer-badge">
          20% OFF
        </span>

        <button className="fav-btn">
          <FaHeart />
        </button>

        <img
          src={food.image}
          alt={food.name}
        />

      </div>

      <div className="food-content">

        <div className="food-title">

          <h3>{food.name}</h3>

          <span>
            ₹{food.price}
          </span>

        </div>

        <p className="food-category">
          {food.category}
        </p>

        <p className="food-description">
          {food.description}
        </p>

        <div className="food-bottom">

          <div className="rating">

            <FaStar />

            <span>4.9</span>

          </div>

          <button
            className="cart-btn"
            onClick={handleAddToCart}
          >

            <FaShoppingCart />

            Add

          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;