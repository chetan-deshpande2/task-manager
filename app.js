const express = require("express");

const app = express();

// middleware
const taskRoute = require("./routes/task");

app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("task Manager");
});

app.use("/api/v1/tasks", taskRoute);


const port = 3002;

app.listen(port, console.log("Server Listenening"));
