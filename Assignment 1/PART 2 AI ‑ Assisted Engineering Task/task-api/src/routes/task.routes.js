const express = require("express");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.post("/tasks", taskController.createTask);
router.patch("/tasks/:id/status", taskController.updateTaskStatus);
router.get("/tasks/user/:userId", taskController.getTasksByUser);

module.exports = router;
