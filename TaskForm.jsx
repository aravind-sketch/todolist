import React, { useState } from "react";
import { createTask } from "./taskService";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ ...task, completed: false }).then(() => {
      setTask({ title: "", description: "", dueDate: "" });
      onAdd();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

