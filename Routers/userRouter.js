const express = require("express");
const User = require("../Models/userModel");
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const value = req.body; 
    const user = new User(value);
    // Save the user to the database
    await user.save();
    res.json({data:user});
  } catch (err) {
    res
      .status(400)
      .send({ error: "Error saving user data", details: err.message });
  }
});

//login api
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
   if (!emailId || !password) {
    throw new Error("Email and password are required!");
  }
  // Find user by email
  const user = await User.findOne({ emailId });
  if (!user) {
    throw new Error("User not found! Please check the email.");
  }
  if(user.password!==password){
    throw new Error("password not matched");
  }
    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (err) {
    // Send error response
    res.status(400).send({
      success: false,
      message: "Unable to login",
      error: err.message,
    });
  }
});

//logout api
authRouter.post("/logout", async (req, res) => {
try { 
res.send("logout successfully");
}
  catch(err){
    res.status(400).send("error occured while logging out!!!"+err);
  }
});

module.exports = authRouter;
