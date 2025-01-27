//Imports
const express = require("express");
const router = express.Router();
const userController = require("../controllers/quizController");

//C-R-U-D
//Create
router.post("/api/quiz", userController.addQuiz);

//Read
router.get("/api/quiz", userController.listQuiz);

//Update
router.get("/api/quiz", userController.listQuiz);

//Delete
router.get("/api/quiz", userController.listQuiz);

//Export the route
module.exports = router;
