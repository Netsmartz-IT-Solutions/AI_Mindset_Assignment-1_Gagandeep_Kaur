# Task Management REST API

Simple Task Management API with in-memory storage.

## Setup

```bash
npm install
npm start
```

Server runs on http://localhost:3000 by default.

## Endpoints

- `POST /tasks`
  - Body: `{ "title": "...", "userId": "...", "status": "pending" }`
  - Response: created task
- `PATCH /tasks/:id/status`
  - Body: `{ "status": "in-progress" }`
  - Response: updated task
- `GET /tasks/user/:userId`
  - Response: `{ "items": [ ... ] }`

## Validation

- `title` and `userId` are required strings.
- `status` must be one of: `pending`, `in-progress`, `completed`.
