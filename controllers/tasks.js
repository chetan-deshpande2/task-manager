const Task = require("../model/task");
const asnycWrapper = require("../middleware/asnyc");
const { createCustomError, CustomAPIError } = require("../errors/custom-error");

exports.getAllTasks = asnycWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amount: tasks.length });
});

exports.createTask = asnycWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

exports.getSingleTask = asnycWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID }).exec();
  if (!task == null) {
    return next(createCustomError(`No task with ID":${taskID}`, 404));
  }
  res.status(200).json({ task });
});

exports.updateTask = asnycWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with ID":${taskID}`, 404));
  }
  res.status(200).json({ task });
});

exports.deleteTask = asnycWrapper(async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndRemove({ _id: taskID }).exec();
    if (!task) {
      return next(createCustomError(`No task with ID":${taskID}`, 404));
    }
    res.status(200).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
