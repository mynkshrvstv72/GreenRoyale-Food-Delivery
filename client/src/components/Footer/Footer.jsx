import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>🌿 GreenRoyale</h2>

          <p>

            Fresh food delivered to your doorstep with quality,
            taste and love.

          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/menu">Menu</a>

          <a href="/cart">Cart</a>

          <a href="/orders">My Orders</a>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p><FaPhone /> +91 9876543210</p>

          <p><FaEnvelope /> support@greenroyale.com</p>

          <p><FaMapMarkerAlt /> Raipur, Chhattisgarh</p>

        </div>

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebook />

            <FaInstagram />

            <FaTwitter />

            <FaGithub />

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">

        © 2026 GreenRoyale. All Rights Reserved.

      </p>

    </footer>

  );

}

export default Footer;