import React from "react";

const TodosList = ({ todos, setTodos }) => {
    
    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.value}
            className="list"
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className="button-delete task-button" onClick={() => onDelete(todo.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default TodosList;
