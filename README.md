Task Manager API

Implemented a RESTful API with the below endpoints:

(1) GET /tasks: Retrieve all tasks.

(2) GET /tasks/:id Retrieve a single task by its ID. 

(3) POST /tasks: Create a new task.
payload : {
    "task_name": "String Content",
    "task_id": 3,
    "task_priority": "High"
}

(4) PUT /tasks/:id Update an existing task by its ID.
payload : {
    "task_name": "String Content",
    "task_id": 3,
    "task_priority": "Medium"
}

(5) DELETE /tasks/:id Delete a task by its ID
