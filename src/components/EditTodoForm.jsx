import { useState } from "react";
import PropTypes from "prop-types";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Atualizar"
      />
      <button type="submit" className="todo-btn">
        Adicionar tarefa
      </button>
    </form>
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired, // editTodo deve ser uma função e é obrigatório
  task: PropTypes.object.isRequired, // task deve ser um objeto e é obrigatório
};
