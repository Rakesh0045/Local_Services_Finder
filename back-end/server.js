import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "./Service.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET; // put in .env later

// 🔹 SIGNUP API
app.post("/api/signup", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // check if user exists
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user
    await pool.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [email, hashedPassword, role]
    );

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 LOGIN API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
