exports.getAllTasks = (req, res) => {
  res.send("all all task ");
};

exports.createTask = (req, res) => {
  res.json(req.body);
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