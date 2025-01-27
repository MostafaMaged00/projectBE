//Imports
require("../models/db");
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
//----------------------------------------------------------------
//Get all users
const listUsers = async (req, res) => {
  res.send("<h1>This is users page</h1>");
};
//----------------------------------------------------------------
//Add a new user
const addUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists by email or username
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create a new user instance
    const user = new User({ username, email, password });

    // Hash the password before saving the user
    user.password = await bcrypt.hash(password, 10);

    // Save the user to the database
    await user.save();

    // Respond with success
    res.status(201).json({
      message: "User created successfully!",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

module.exports = { listUsers, addUser };
