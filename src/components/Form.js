import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    
    // untuk mengupload todo yang sudah ada
    const updateTodo = (value, id, completed) => {
      const newTodo = todos.map((todo) => 
        todo.id === id ? { value, id, completed } : todo
      );
      setTodos(newTodo);
      setEditTodo("");
    };
    
    // untuk menambahkan todo baru
    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    // digunakan untuk menambahkan todo baru
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
          setTodos([...todos, {id: uuidv4(), value: input, completed: false}]);
          setInput(''); 
        } else{
          updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

  // form submit untuk menambahkan todo baru dan mengupdate todo yang sudah ada
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='Enter a Todo...' className='task-input' value={input} required onChange={onInputChange} />
        <button className='button-add' type='submit'>Add</button>
    </form>
  )
} 

export default Form;