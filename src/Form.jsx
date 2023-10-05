import React from "react";
import { useState } from "react";

const Form = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: Date.now(), task: newTask, checked: checked };
    if (task.task != "" && task.task != " ") {
      setTasks((prevTasks) => [...prevTasks, task]);
    }

    // Save tasks to local storage
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));

    setNewTask("");
  };

  const handleDelete = () => {
    setTasks([]);

    localStorage.removeItem("tasks");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Add a task"
          id="input-field"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn" name="submitButton">
          add
        </button>
      </div>
      <button onClick={handleDelete} type="reset" className="btn-reset">
        Clear Tasks
      </button>
    </form>
  );
};

export default Form;
