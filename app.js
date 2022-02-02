const express = require("express");

const app = express();

// middleware
const taskRoute = require("./routes/task");

const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("task Manager");
});

app.use("/api/v1/tasks", taskRoute);

const port = 3002;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port);
  } catch (error) {
    throw error("Couldn't Connect");
  }
};

start();

