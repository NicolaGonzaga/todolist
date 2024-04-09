// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Qual é a tarefa de hoje?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Adicionar tarefa
      </button>
    </form>
  );
};

export default TodoForm;
