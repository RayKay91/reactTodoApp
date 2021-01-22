import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import TodoItems from './components/TodoItems';
import Todo from './components/Todo';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {todoAdded, todoRemover} from './actionGenerators'
function App() {

  const todoItems = useSelector(state => state)
  const dispatch = useDispatch()
 

  const [formValue, setFormValue] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue) {
      setShowErrorMessage(true);
      return;
    } else {
      if (showErrorMessage) setShowErrorMessage(false);
      dispatch(todoAdded(formValue))
      setFormValue('');
    }
  };

  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleDelete = (id) => {
   
    dispatch(todoRemover(id))
  };

  return (
    <>
      <Title text="Welcome to your To-do App" />
      {showErrorMessage && <ErrorMessage />}
      <Form onChange={handleChange} onSubmit={handleSubmit} value={formValue} />
      {todoItems && <TodoItems>

        {todoItems.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.todo}
              handleDelete={() => handleDelete(todo.id)}
            />
          );
        })}

      </TodoItems>}
      
    
    
      {todoItems.length === 0 ? null : (
        <h5>
          To mark items as complete you can click them. Click the delete button
          to remove them from the list.
        </h5>
      )} 
    </>
  );
}

export default App;
