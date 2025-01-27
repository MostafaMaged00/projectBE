//Imports
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

//C-R-U-D
//Create
router.post("/api/book", bookController.addBook);

//Read
router.get("/api/book", bookController.getAllBooks);

//Update
router.put("/api/book/:id", bookController.updateBook);

//Delete
router.delete("/api/book/:id", bookController.deleteBook);

//Export the route
module.exports = router;
