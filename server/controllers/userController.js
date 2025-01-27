//Imports
require("../models/db");
const user = require("../models/User");

//Get all users
exports.listUsers = async (req, res) => {
  res.send("<h1>This is users page</h1>");
};
