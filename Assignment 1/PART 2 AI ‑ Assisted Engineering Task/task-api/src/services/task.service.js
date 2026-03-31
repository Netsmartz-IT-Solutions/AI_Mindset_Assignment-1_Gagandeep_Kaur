const taskStore = require("../data/task.store");

function createTask({ title, userId, status }) {
  return taskStore.createTask({
    title: title.trim(),
    userId: userId.trim(),
    status: status || "pending",
  });
}

function updateTaskStatus(id, status) {
  return taskStore.updateTaskStatus(id, status);
}

function getTasksByUser(userId) {
  return taskStore.getTasksByUser(userId);
}

module.exports = {
  createTask,
  updateTaskStatus,
  getTasksByUser,
};
