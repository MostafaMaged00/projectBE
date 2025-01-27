//Imports
require("../models/db");
const Quiz = require("../models/Quiz.js");

//Read----------------------------------------------------------------
//Get all quizes
const listQuiz = async (req, res) => {
  res.send("<h1>This is all queze page</h1>");
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

module.exports = { listQuiz, addQuiz };
