import { useEffect, useState } from "react";
import axios from "axios";

import FoodCard from "../components/FoodCard/foodCard";

import "./Menu.css";

import API_URL from "../services/api";

function Menu() {

  const [foods, setFoods] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");


  useEffect(() => {

    axios

      .get(`${API_URL}/api/foods`)

      .then((res) => {

        setFoods(res.data);

      })

      .catch((err) => console.log(err));

  }, []);

  const categories = [

    "All",

    ...new Set(foods.map(food => food.category))

  ];

  const filteredFoods = foods.filter((food) => {

    const matchSearch = food.name

      .toLowerCase()

      .includes(search.toLowerCase());

    const matchCategory =

      category === "All" ||

      food.category === category;

    return matchSearch && matchCategory;

  });

  return (

    <div className="page menu-page">

      <div className="menu-header">

        <h1>🍽 Our Menu</h1>

        <p>

          Explore our delicious dishes prepared with fresh ingredients.

        </p>

      </div>

      <div className="menu-filter">

        <input

          type="text"

          placeholder="Search Food..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

        />

        <select

          value={category}

          onChange={(e)=>setCategory(e.target.value)}

        >

          {

            categories.map(cat=>(

              <option

                key={cat}

                value={cat}

              >

                {cat}

              </option>

            ))

          }

        </select>

      </div>

      <div className="menu-grid">

        {

          filteredFoods.map(food=>(

            <FoodCard

              key={food._id}

              food={food}

            />

          ))

        }

      </div>

    </div>

  );

}

export default Menu;