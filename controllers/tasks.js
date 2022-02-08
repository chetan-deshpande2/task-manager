const Task = require("../model/task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID }).exec();
    if (!task == null) {
      return res.status(404).json({ msg: `No task with ID":${taskID`} });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.updateTask = (req, res) => {
  res.send("update Task");
};

exports.deleteTask = (req, res) => {
  res.send("task delete");
};
