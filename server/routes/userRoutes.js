//Imports
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//C-R-U-D
//Create
router.post("/api/users", userController.addUser);

//Read
router.get("/api/users", userController.listUsers);

//Export the route
module.exports = router;
