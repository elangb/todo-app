import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  // untuk menghapus todo yang sudah ada
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // untuk mengupdate todo yang sudah ada
  const onEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        // menampilkan todo yang sudah ada
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.value}
            className="list"
            onChange={(e) => e.preventDefault()}
          />
          <div>
            {/* menampilkan button untuk menghapus todo yang sudah ada */}
            <button
              className="button-delete task-button"
              onClick={() => onDelete(todo.id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>

            {/* button untuk mengupdate todo yang sudah ada */}
            <button
              className="button-edit task-button"
              onClick={() => onEdit(todo)}
            >
              <i className="far fa-edit"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
