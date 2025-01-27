//Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const userRoute = require("./server/routes/userRoutes.js");
app.use("/", userRoute);

app.get("/", (req, res) => {
  res.send("This is start point");
});
//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
