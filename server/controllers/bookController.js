const Book = require("../models/Book");

//Create
// Function to add a new book
const addBook = async (req, res) => {
  const { id, title, author, publishedDate, genre, pages } = req.body;

  try {
    const book = new Book({
      id,
      title,
      author,
      genre,
      pages,
    });
    await book.save();

    res.status(201).json({
      message: "Book added successfully!",
      book,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

//Read
// Function to get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found." });
    }

    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

//Update
// Function to get a book by its ID
const getBookById = async (req, res) => {
  const { id } = req.params; // Get the book ID from the URL params

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    res.status(200).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};



//Update
//Function to update a book by its ID
const updateBook = async (req, res) => {
  const { id } = req.params; // Get the book ID from the URL params
  const { title, author, publishedDate, genre, pages } = req.body; // Get the updated data

  try {
    // Find the book by ID and update it
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, publishedDate, genre, pages }, // Fields to update
      { new: true } // Option to return the updated document
    );

    // If no book is found with the given ID
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    res.status(200).json({
      message: "Book updated successfully!",
      book,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

//Delete
// Function to delete a book by its ID
const deleteBook = async (req, res) => {
  const { id } = req.params; // Get the book ID from the URL params

  try {
    // Find the book by ID and delete it
    const book = await Book.findByIdAndDelete(id);

    // If no book was found with the given ID
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    res.status(200).json({
      message: "Book deleted successfully!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook };
