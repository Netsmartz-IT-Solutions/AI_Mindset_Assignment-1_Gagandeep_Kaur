const tasks = [];
let nextId = 1;

function createTask({ title, userId, status }) {
  const task = {
    id: String(nextId++),
    title,
    userId,
    status,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  return task;
}

function getTaskById(id) {
  return tasks.find((task) => task.id === id) || null;
}

function updateTaskStatus(id, status) {
  const task = getTaskById(id);
  if (!task) {
    return null;
  }

  task.status = status;
  task.updatedAt = new Date().toISOString();
  return task;
}

function getTasksByUser(userId) {
  return tasks.filter((task) => task.userId === userId);
}

module.exports = {
  createTask,
  getTaskById,
  updateTaskStatus,
  getTasksByUser,
};
