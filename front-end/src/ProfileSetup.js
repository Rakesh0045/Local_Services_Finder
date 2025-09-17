// ProfileSetup.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProfileSetup.css";

const categories = [
  "Plumbing",
  "Electrician",
  "Tutoring",
  "House Cleaning",
  "Carpentry",
  "IT Support",
];

const ProfileSetup = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [bio, setBio] = useState("");

  const handleCategoryToggle = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // get token from signup/login
      await axios.post(
        "http://localhost:5000/api/service-provider/profile",
        { categories: selectedCategories, bio },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Profile setup completed!", { position: "top-center" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Profile setup failed", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="profile-bg">
      <div className="profile-card">
        <h2>Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <label>Select Your Services</label>
          <div className="category-list">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`category-btn ${
                  selectedCategories.includes(cat) ? "active" : ""
                }`}
                onClick={() => handleCategoryToggle(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <label>Short Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Describe your services..."
          />

          <button type="submit" className="submit-btn">
            Save Profile
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileSetup;
