import React from "react";
import { useState } from "react";

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Add a task" id="input-field" />
      <button type="submit" className="btn">
        add
      </button>
    </form>
  );
};

export default Form;
