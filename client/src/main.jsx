import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <BrowserRouter>

      <AuthProvider>

        <CartProvider>

          <App />

          <ToastContainer
  position="top-right"
  autoClose={2000}
  theme="colored"
/>

        </CartProvider>

      </AuthProvider>

    </BrowserRouter>

  </StrictMode>

);