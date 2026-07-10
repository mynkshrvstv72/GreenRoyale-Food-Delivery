import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import "./Register.css";

import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = await register({
        name,
        email,
        password,
      });

      setUser(data);

      toast.success("Registered Successfully");

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="page register-container">

      <form className="register-box" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

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
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;