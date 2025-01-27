const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Book schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
  },
  author: {
    type: String,
    required: true, // Author is mandatory
  },
  publishedDate: {
    type: Date,
    required: true, // Published Date is mandatory
  },
  genre: {
    type: String,
    required: true, // Genre is mandatory
  },
  pages: {
    type: Number,
    required: true, // Pages count is mandatory
  },
  dateCreated: {
    type: Date,
    default: Date.now, // Automatically set the date when the document is created
  },
});

// Create and export the Book model based on the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
