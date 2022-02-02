const Task = require("../model/task");

exports.getAllTasks = (req, res) => {
  res.send("all all task ");
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

exports.getSingleTask = (req, res) => {
  res.json(req.params.id);
};

exports.updateTask = (req, res) => {
  res.send("update Task");
};

exports.deleteTask = (req, res) => {
  res.send("task delete");
};
