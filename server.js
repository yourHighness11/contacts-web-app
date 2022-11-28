require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const ejs = require("ejs");
const { default: mongoose } = require("mongoose");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnect");


connectDB(); //got to config folder to change connection string
app.use(logger); //logs are stored in logs folder
app.use(express.json()); //to parse json data
app.use(bodyParser.urlencoded({
  extended: true
})); //to get the data from body
app.use(express.static("public")); //used for static files
app.set("view engine", "ejs"); //set view engine

app.use("/", require("./routes/fileRoute"));

//error handler for connection
app.use(errorHandler);

//mongoose connection

// console.log("Connnected to mongoDB");
app.listen(port, () => {
  // console.log(`server running on port ${port}`)
});

mongoose.connection.on("error", err => {
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});
