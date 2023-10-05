import Form from "./Form";
import { useState } from "react";
import Tasks from "./Tasks";
function App() {
  return (
    <>
      <div className="header">
        <h1>Task Manager</h1>
        <Form />
      </div>
      <Tasks />
    </>
  );
}

export default App;
