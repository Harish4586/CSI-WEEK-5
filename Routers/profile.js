const express = require("express");
const User = require("../Models/userModel");
const profilerouter = express.Router();

profilerouter.get("/profile", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude passwords
    res.json(users);
  } catch (err) {
    res.status(500).send({ error: "Error fetching users" });
  }
});

profilerouter.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).send({ error: "Error fetching user" });
  }
});

profilerouter.patch("/profile/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});
profilerouter.put("/profile/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!user) return res.status(404).send({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});
profilerouter.delete("/profile/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send({ error: "User not found" });
    res.send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: "Error deleting user" });
  }
});

module.exports = profilerouter;
