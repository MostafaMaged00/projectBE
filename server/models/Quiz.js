const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Quiz schema
const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      choices: {
        type: [String], // Array of choices
        required: true,
        validate: {
          validator: function (v) {
            return v.length >= 2; // Ensure there are at least 2 choices
          },
          message: "A question must have at least 2 choices.",
        },
      },
      correctAnswer: {
        type: String,
        required: true, // Correct answer must be one of the choices
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
