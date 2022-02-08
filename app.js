const express = require("express");

const app = express();

// middleware
const taskRoute = require("./routes/task");

const connectDB = require("./db/connect");
require("dotenv").config();
const errorController = require("./middleware/404");
const errorHandler = require("./middleware/errorHandler");

app.use(express.static("./public"));
app.use(express.json());

//setting headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type , Authorization");
  next();
});

//routes

app.use("/api/v1/tasks", taskRoute);

app.use(errorController.notFound);
app.use(errorHandler.errorHandlerMiddleware);

const port = process.env.PORT || 3002

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port);
  } catch (error) {
    throw error("Couldn't Connect");
  }
};

start();

