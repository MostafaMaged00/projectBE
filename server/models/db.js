//Import mongoose
const mongoose = require("mongoose");

const conn = async () => {
  try {
    //connect to the database
    mongoose.connect(process.env.MONGO_URI); //get the connection string from env file using process.env
    mongoose.connection.once("open", () => {
      console.log("Connected successfully to Database");
    });
  } catch (error) {
    console.log(`Something went wrong connecting to mongodb: ${error.message}`);
    // Exit the process if the connection fails
    process.exit(1);
  }
};

//Export connection
module.exports = conn;
