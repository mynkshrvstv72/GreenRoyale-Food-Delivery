import "./foodCard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

import {
  addFavourite,
  removeFavourite,
  getFavourites
} from "../../services/favouriteService";

import { useEffect, useState } from "react";

function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {

    checkFavourite();

}, []);

const checkFavourite = async () => {

    try{

        const data = await getFavourites();

        const found = data.some(

            item => item.food._id === food._id

        );

        setIsFavourite(found);

    }catch(error){

        console.log(error);

    }

};

  const handleFavourite = async (e) => {

    e.preventDefault();

    e.stopPropagation();

    try{

        if(isFavourite){

            await removeFavourite(food._id);

            setIsFavourite(false);

            toast.success("Removed from favourites");

        }else{

            await addFavourite(food._id);

            setIsFavourite(true);

            toast.success("Added to favourites ❤️");

        }

    }catch(error){

        toast.error(error.response?.data?.message || "Error");

    }

};

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

      <button
    type="button"
    className="fav-btn"
    onClick={handleFavourite}
>
    <FaHeart color={isFavourite ? "red" : "black"} />
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