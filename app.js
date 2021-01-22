const morgan = require("morgan"); //HTTP request logger middleware for node.js
const dotenv = require("dotenv"); // loads environment variables from a .env file into process.env. 
dotenv.config(); 
const mongoose = require("mongoose"); // MongoDB object modeling tool designed to work in an asynchronous environment.
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const express = require("express");
const app = express();

// import routes
const postRoutes = require("./routes/post");
// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));
mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});



// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json()); 
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`A node JS API server is listening on port: ${port}`);
});

