import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import { toast } from "react-toastify";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = await login({

        email,

        password,

      });

      setUser(data);

      toast.success("Logged-In Successfully");

      navigate("/");

    } catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

  };

  return (

    <div className="page login-container">

      <form className="login-box" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          required

        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          required

        />

        <button type="submit">

          Login

        </button>

      </form>

    </div>

  );

}

export default Login;