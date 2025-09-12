import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      toast.success(res.data.message, { position: "top-center" });
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2>Login</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn">Login</button>
        </form>

        <p className="switch-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
