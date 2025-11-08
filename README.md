# Task Manager (Node.js + Express)

Simple backend API for managing tasks, using a JSON file as storage.

## Features implemented
1. Add a task with a title and optional description.
2. Assign task to Employees (during create or via assign endpoint).
3. View all tasks with a unique ID.
4. Search task by Employee Name.
5. Delete a task by ID.
6. Mark a task as completed.

## Endpoints
- `POST /tasks`  
  Body: `{ "title": "Task title", "description": "optional", "employee": "Employee Name" }`

- `GET /tasks`  
  Returns all tasks.

- `GET /tasks/search?employee=Name`  
  Search tasks by employee name (case-insensitive, partial match).

- `GET /tasks/:id`  
  Get a single task by ID.

- `DELETE /tasks/:id`  
  Delete a task by ID.

- `PUT /tasks/:id/complete`  
  Mark a task as completed.

- `PUT /tasks/:id/assign`  
  Body: `{ "employee": "Name" }` — assign or change employee for a task.

## Setup
1. Ensure Node.js is installed.
2. Unzip the project and run:
   ```bash
   npm install
   npm start
   ```
3. Server will run on `http://localhost:3000`.

## Notes
- Data is stored in `data/tasks.json`. This is simple file-based persistence for the mini project.
- For production use, swap to a proper database (MongoDB / PostgreSQL / SQL Server).
