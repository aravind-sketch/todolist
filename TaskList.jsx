import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "./taskService";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    getTasks().then(res => setTasks(res.data));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const toggleComplete = (task) => {
    updateTask(task.id, { ...task, completed: !task.completed }).then(loadTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title} ({task.dueDate})
            </span>
            <button onClick={() => toggleComplete(task)}></button>
            <button onClick={() => deleteTask(task.id).then(loadTasks)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

