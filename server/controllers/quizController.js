//Imports
require("../models/db");
const Quiz = require("../models/Quiz.js");

//Read----------------------------------------------------------------
//Get all quizes
const listQuiz = async (req, res) => {
  try {
    // Fetch all quizzes from the database
    const quizzes = await Quiz.find();

    // Check if quizzes are found
    if (quizzes.length === 0) {
      return res.status(404).json({ message: "No quizzes found." });
    }

    // Return the quizzes in the response
    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

//Create
//----------------------------------------------------------------
//Add a new Quiz
const addQuiz = async (req, res) => {
  const { title, questions } = req.body;

  try {
    // Create a new quiz instance
    const quiz = new Quiz({ title, questions });

    // Save the quiz to the database
    await quiz.save();

    res.status(201).json({
      message: "Quiz created successfully!",
      quiz,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

//Update
//----------------------------------------------------------------
//Update a new Quiz

const updateQuiz = async (req, res) => {
  const { id } = req.params; // Get the quiz ID from the URL params
  const { title, questions } = req.body; // Get the updated data from the request body

  try {
    // Find the quiz by its ID and update it
    const quiz = await Quiz.findByIdAndUpdate(
      id, // The ID of the quiz to update
      { title, questions }, // The updated data
      { new: true } // This option returns the updated document, not the original
    );

    // If the quiz doesn't exist
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found." });
    }

    // Return the updated quiz
    res.status(200).json({
      message: "Quiz updated successfully!",
      quiz,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

//Delete
//----------------------------------------------------------------
//Delete a  Quiz
const deleteQuiz = async (req, res) => {
  const { id } = req.params; // Get the quiz ID from the URL params

  try {
    // Find the quiz by ID and delete it
    const quiz = await Quiz.findByIdAndDelete(id);

    // If no quiz was found with the given ID
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found." });
    }

    // Return a success message
    res.status(200).json({
      message: "Quiz deleted successfully!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again." });
  }
};
module.exports = { listQuiz, addQuiz, updateQuiz, deleteQuiz };
