import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
        role,
      });
      toast.success(res.data.message, { position: "top-center" });

      if (role === "Service Provider") {
        navigate("/profile-setup"); // redirect to profile setup
      } else {
        navigate("/login"); // customers go directly to login
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed", {
        position: "top-center",
      });
    }

  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2>Create Account</h2>
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
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Select Role</label>
          <div className="role-buttons">
            <button
              type="button"
              className={role === "Service Provider" ? "active-role" : ""}
              onClick={() => setRole("Service Provider")}
            >
              Service Provider
            </button>
            <button
              type="button"
              className={role === "Customer" ? "active-role" : ""}
              onClick={() => setRole("Customer")}
            >
              Customer
            </button>
          </div>

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
