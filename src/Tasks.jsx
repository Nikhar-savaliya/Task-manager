import React from "react";

const Tasks = () => {
  const tasklist = [
    {
      id: 1,
      task: "create a web-project.",
    },
    {
      id: 2,
      task: "go for shopping",
    },
    {
      id: 3,
      task: "attend hecktoberfest",
    },
  ];
  return (
    <ul className="list">
      {tasklist.map((t) => (
        <div className="list-item-wrapper">
          <input type="checkbox" />
          <li key={t.id} className="list-item">
            {t.task}
          </li>
          <button className="btn-delete">❌</button>
        </div>
      ))}
    </ul>
  );
};

export default Tasks;
