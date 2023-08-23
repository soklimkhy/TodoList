import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="checkboxz">
        <input type="checkbox"></input>
        <p>{todo.text}</p>
      </div>
      <div className="button">
        <button onClick={() => onDelete(todo.id)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
