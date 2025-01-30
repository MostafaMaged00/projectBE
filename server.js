//Imports
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
// functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to the database
const conn = require("./server/models/db.js");
conn();

//Set Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routes
//Get the user routes
const userRoute = require("./server/routes/userRoutes.js");
app.use("/", userRoute);
//Get the quiz routes
const quizRoute = require("./server/routes/quizRoutes.js");
app.use("/", quizRoute);
//Get the book routes
const bookRoute = require("./server/routes/bookRoutes.js");
app.use("/", bookRoute);

//404 error page
app.use(function (req, res, next) {
 res.render("404");
});

app.get("/", (req, res) => {
  res.send("<h1>This is start point</h1>");
});
//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
