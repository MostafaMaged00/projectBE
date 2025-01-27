//Imports
const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

//C-R-U-D
//Create
router.post("/api/quiz", quizController.addQuiz);

//Read
router.get("/api/quiz", quizController.listQuiz);

//Update
router.put("/api/quiz/:id", quizController.updateQuiz);

//Delete
router.delete("/api/quiz/:id", quizController.deleteQuiz);

//Export the route
module.exports = router;
