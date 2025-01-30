const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Book schema
const bookSchema = new Schema({
  id: {
    type: Number,
    required: true, // Book Id is required
  },
  title: {
    type: String,
    required: true, // Title is mandatory
  },
  author: {
    type: String,
    required: true, // Author is mandatory
  },
  genre: {
    type: String,
    required: true, // Genre is mandatory
  },
  pages: {
    type: Number,
    required: true, // Pages count is mandatory
  },
});

// Create and export the Book model based on the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
