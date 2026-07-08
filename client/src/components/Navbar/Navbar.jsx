import "./Navbar.css";

import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import { motion } from "framer-motion";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Navbar(){

    const { cart } = useContext(CartContext);

return(

<motion.nav

initial={{y:-100}}

animate={{y:0}}

transition={{duration:.8}}

className="navbar"

>

<div className="logo">

🌿 GreenRoyale

</div>

<ul>

<li>

<Link to="/">Home</Link>

</li>

<li>

<Link to="/menu">

Menu

</Link>

</li>

<li>

<Link to="/cart">

<FaShoppingCart/>

<span>

({cart.reduce((a,b)=>a+b.quantity,0)})

</span>

</Link>

</li>

</ul>

</motion.nav>

)

}

export default Navbar;