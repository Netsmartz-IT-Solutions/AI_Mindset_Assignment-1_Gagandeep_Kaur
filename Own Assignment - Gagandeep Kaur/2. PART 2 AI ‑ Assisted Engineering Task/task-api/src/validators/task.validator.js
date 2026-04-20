const VALID_STATUSES = ["pending", "in-progress", "completed"];

function validateCreateTask(body) {
  const errors = [];

  if (!body || typeof body !== "object") {
    return { ok: false, errors: ["Request body must be JSON"] };
  }

  if (typeof body.title !== "string" || body.title.trim() === "") {
    errors.push("title is required");
  }

  if (typeof body.userId !== "string" || body.userId.trim() === "") {
    errors.push("userId is required");
  }

  if (body.status !== undefined && !VALID_STATUSES.includes(body.status)) {
    errors.push(`status must be one of: ${VALID_STATUSES.join(", ")}`);
  }

  return { ok: errors.length === 0, errors };
}

function validateStatusUpdate(body) {
  const errors = [];

  if (!body || typeof body !== "object") {
    return { ok: false, errors: ["Request body must be JSON"] };
  }

  if (!VALID_STATUSES.includes(body.status)) {
    errors.push(`status must be one of: ${VALID_STATUSES.join(", ")}`);
  }

  return { ok: errors.length === 0, errors };
}

function validateUserId(userId) {
  if (typeof userId !== "string" || userId.trim() === "") {
    return { ok: false, errors: ["userId is required"] };
  }

  return { ok: true, errors: [] };
}

module.exports = {
  validateCreateTask,
  validateStatusUpdate,
  validateUserId,
  VALID_STATUSES,
};
