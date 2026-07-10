import { useEffect, useState } from "react";
import { getFavourites } from "../services/favouriteService";
import FoodCard from "../components/FoodCard/foodCard";
import "./Favourite.css";

import { removeFavourite } from "../services/favouriteService";
import { toast } from "react-toastify";

function Favourite() {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = async () => {
    try {

      const data = await getFavourites();

      setFavourites(data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleRemove = async (foodId) => {

    try{

        await removeFavourite(foodId);

        toast.success("Removed from favourites ❤️");

        loadFavourites();

    }catch(error){

        toast.error(error.response?.data?.message || "Error");

    }

};

  return (

    <div className="favourite-page">

      <h1>❤️ My Favourites</h1>

      {
        favourites.length === 0 ? (

          <div className="empty-favourite">

            <h2>No Favourite Foods Yet</h2>

            <p>Add your favourite dishes from Menu.</p>

          </div>

        ) : (

          <div className="favourite-grid">

            {
              favourites.map((item) => (

               <div className="fav-card" key={item.food._id}>

    <img
        src={item.food.image}
        alt={item.food.name}
    />

    <h3>{item.food.name}</h3>

    <p>{item.food.category}</p>

    <h4>₹ {item.food.price}</h4>

    <button
        onClick={() => handleRemove(item.food._id)}
        className="remove-btn"
    >
        Remove ❤️
    </button>

</div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Favourite;