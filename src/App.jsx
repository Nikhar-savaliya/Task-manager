import Form from "./Form";
import { useState, useEffect } from "react";
import Tasks from "./Tasks";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  return (
    <>
      <div className="header">
        <h1>Task Manager</h1>
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
