import React from "react";
import { useState } from "react";
const Tasks = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    // console.log(e.target.id);
    setTasks((tsk) => tsk.filter((item) => item.id !== id));

    const updatedTasks = tasks.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <ul className="list">
      {tasks.map((t) => (
        <li className="list-item-wrapper" key={t.id}>
          <input type="checkbox" />
          <span className="list-item">{t.task}</span>
          <button
            className="btn-delete"
            onClick={() => handleDelete(t.id)}
            id={t.id}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
