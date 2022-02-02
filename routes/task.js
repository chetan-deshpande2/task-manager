const express = require("express");

const router = express.Router();
const taskController = require("../controllers/tasks");

router.get("/", taskController.getAllTasks).post(taskController.createTask);

router
  .route("/:id")
  .get(taskController.getSingleTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);


module.exports = router;
