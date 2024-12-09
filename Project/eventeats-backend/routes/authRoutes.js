const express = require("express");
const User = require("../models/User"); // Import user mock model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Signup handler
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };

    await User.create(newUser); // Save user to the in-memory array
    res.status(201).json({ message: "User signup successful", user: { name, email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong during signup" });
  }
});

// Login handler
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
    res.status(200).json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong during login" });
  }
});

module.exports = router;
