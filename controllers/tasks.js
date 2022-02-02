exports.getAllTasks = (req, res) => {
  res.send("all all task ");
};

exports.createTask = (req, res) => {
  res.send("task create");
};

exports.getSingleTask = (req, res) => {
  res.send("get single task");
};

exports.updateTask = (req, res) => {
  res.send("update Task");
};

exports.deleteTask = (req, res) => {
  res.send("task delete");
};