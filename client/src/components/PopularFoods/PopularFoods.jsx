import "./PopularFoods.css";

import { useEffect, useState } from "react";

import axios from "axios";

import FoodCard from "../FoodCard/foodCard";

function PopularFoods({
search,
category
}){

const [foods,setFoods]=useState([]);

useEffect(()=>{

axios

.get("http://localhost:5001/api/foods")

.then((res)=>setFoods(res.data))

.catch((err)=>console.log(err));

},[]);

return(

<section className="popular">

<h2>

Popular Dishes

</h2>

<p>

Our Most Loved Royal Dishes

</p>

<div className="popular-grid">

{

foods

.filter(food=>{

const searchMatch=

food.name

.toLowerCase()

.includes(

search.toLowerCase()

);

const categoryMatch=

category==="All"

||

food.category===category;

return(

searchMatch

&&

categoryMatch

);

})

.map(food=>(

<FoodCard

key={food._id}

food={food}

/>

))

}

</div>

</section>

)

}

export default PopularFoods;