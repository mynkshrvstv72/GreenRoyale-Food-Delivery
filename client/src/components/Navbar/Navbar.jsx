import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import { motion } from "framer-motion";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { useAuth } from "../../context/AuthContext";

import { logout } from "../../services/authService";

function Navbar() {

  const { cart, clearCart } = useContext(CartContext);

  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    setUser(null);

    navigate("/login");

    clearCart();
    localStorage.removeItem("cart");

  };

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: .8 }}
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

          <Link to="/menu">Menu</Link>

        </li>

        <li>

  {!user?.isAdmin && (
    <Link to="/orders">My Orders</Link>
  )}

  {user?.isAdmin && (
    <Link to="/admin">Admin</Link>
  )}
        </li>

        <li>
          <Link to="/favourites">Favourites</Link>
        </li>

        <li>

          <Link to="/cart">

            <FaShoppingCart />

            <span>

              ({cart.reduce((a, b) => a + b.quantity, 0)})

            </span>

          </Link>

        </li>

        {user ? (

          <>

            <li>

              <span className="username">

                👤 {user.name}

              </span>

            </li>

            <li>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                Logout

              </button>

            </li>

          </>

        ) : (

          <>

            <li>

              <Link to="/login">

                Login

              </Link>

            </li>

            <li>

              <Link to="/register">

                Register

              </Link>

            </li>

          </>

        )}

      </ul>

    </motion.nav>

  );

}

export default Navbar;