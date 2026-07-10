import "./Hero.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  FaLeaf,
  FaStar,
  FaTruck,
  FaUtensils,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* LEFT SIDE */}

      <motion.div
        className="hero-left"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="hero-tag">
          <FaLeaf /> Premium Vegetarian Dining
        </span>

        <h1>
          Experience
          <br />

          <span>Royal Taste</span>

          <br />

          Crafted With Nature
        </h1>

        <p>
          Discover handcrafted vegetarian dishes prepared
          with premium ingredients, rich flavours and
          unforgettable dining experiences.
        </p>

        <div className="hero-buttons">
          <Link to="/menu">
            <button className="explore-btn">
              Explore Menu
            </button>
          </Link>

          <Link to="/cart">
            <button className="order-btn">
              Order Now
            </button>
          </Link>
        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <FaStar />
            <h3>4.9</h3>
            <p>Customer Rating</p>
          </div>

          <div className="stat-card">
            <FaTruck />
            <h3>15 Min</h3>
            <p>Fast Delivery</p>
          </div>

          <div className="stat-card">
            <FaUtensils />
            <h3>100%</h3>
            <p>Fresh Meals</p>
          </div>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="hero-right"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1588644525273-f37b60d78512?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVnZXRhcmlhbiUyMG1lYWx8ZW58MHx8MHx8fDA%3D"
          alt="Food"

          animate={{
            y: [0, -20, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <div className="circle one"></div>

        <div className="circle two"></div>

        <div className="circle three"></div>

      </motion.div>

      {/* Scroll Indicator */}

      <motion.div
        className="scroll-down"

        animate={{
          y: [0, 10, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}

export default Hero;