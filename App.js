import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAdd={() => setRefresh(!refresh)} />
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
