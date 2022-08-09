import React, { useState} from 'react';
import "./App.css";
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

const App = () => {

  const [ input, setInput ] = useState('');
  const [ todos, setTodos ] = useState([]);
  return (
    <div className='container'>
      <div className='app_wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
