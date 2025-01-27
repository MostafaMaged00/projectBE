//Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "This field is required",
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: "This field is required",
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: "This field is required",
      minlength: 6, // Minimum password length
    },
    dateCreated: {
      type: Date,
      default: Date.now, // Sets the default to current date and time
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
