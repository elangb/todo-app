import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className="app_wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            // input={input} untuk mengambil input dari state input
            input={input}

            // setInput={setInput} untuk mengupdate input dari state input
            setInput={setInput}

            // todos={todos} untuk mengambil todos dari state todos
            todos={todos}

            // setTodos={setTodos} untuk mengupdate todos dari state todos
            setTodos={setTodos}

            // editTodo={editTodo} untuk mengambil editTodo dari state editTodo
            editTodo={editTodo}

            // setEditTodo={setEditTodo} untuk mengupdate editTodo dari state editTodo
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      <footer className="footer">
        <p>
          Todo App Using useState Hooks & React Hooks 
        </p>
      </footer>
      </div>
    </div>
  );
};

export default App;
