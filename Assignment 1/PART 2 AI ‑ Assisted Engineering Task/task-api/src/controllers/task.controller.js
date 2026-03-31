const taskService = require("../services/task.service");
const {
  validateCreateTask,
  validateStatusUpdate,
  validateUserId,
} = require("../validators/task.validator");

function createTask(req, res) {
  const result = validateCreateTask(req.body);
  if (!result.ok) {
    return res.status(400).json({ errors: result.errors });
  }

  const task = taskService.createTask(req.body);
  return res.status(201).json(task);
}

function updateTaskStatus(req, res) {
  const result = validateStatusUpdate(req.body);
  if (!result.ok) {
    return res.status(400).json({ errors: result.errors });
  }

  const updated = taskService.updateTaskStatus(req.params.id, req.body.status);
  if (!updated) {
    return res.status(404).json({ error: "Task not found" });
  }

  return res.json(updated);
}

function getTasksByUser(req, res) {
  const result = validateUserId(req.params.userId);
  if (!result.ok) {
    return res.status(400).json({ errors: result.errors });
  }

  const tasks = taskService.getTasksByUser(req.params.userId.trim());
  return res.json({ items: tasks });
}

module.exports = {
  createTask,
  updateTaskStatus,
  getTasksByUser,
};
