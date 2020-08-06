import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import TodoItems from './components/TodoItems';
import Todo from './components/Todo';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [formValue, setFormValue] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue === '') {
      setShowErrorMessage(true);
      return;
    } else {
      if (showErrorMessage) setShowErrorMessage(false);
      setTodoItems([...todoItems, formValue]);
      setFormValue('');
    }
  };

  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleDelete = (id) => {
    const todos = [...todoItems];
    todos.splice(id, 1);
    setTodoItems(todos);
  };

  return (
    <>
      <Title text="Welcome to your To-do App" />
      {showErrorMessage && <ErrorMessage />}
      <Form onChange={handleChange} onSubmit={handleSubmit} value={formValue} />
      <TodoItems>
        {todoItems.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo}
              handleDelete={() => handleDelete(index)}
            />
          );
        })}
      </TodoItems>
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
