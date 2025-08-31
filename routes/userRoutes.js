const express = require("express");
const router = express.Router();
const User = require("../models/User");
const redisClient = require("../redisClient");

// GET all users (with caching)
router.get("/", async (req, res) => {
  try {
    // 1. Check cache
    const cachedUsers = await redisClient.get("allUsers");
    if (cachedUsers) {
      console.log("📌 Returning cached data");
      return res.status(200).json(JSON.parse(cachedUsers));
    }

    // 2. Fetch from DB
    const users = await User.find();

    // 3. Save in cache for 60 sec
    await redisClient.setEx("allUsers", 60, JSON.stringify(users));

    console.log("📌 Returning fresh data from DB");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE user
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const user = new User({ name, email, mobile, password });
    await user.save();

    await redisClient.del("allUsers"); // Invalidate cache
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    await redisClient.del("allUsers"); // Invalidate cache
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    await redisClient.del("allUsers"); // Invalidate cache
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
