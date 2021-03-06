import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import TodoItems from './components/TodoItems';
import Todo from './components/Todo';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

class App extends React.Component {
  state = {
    formValue: '',
    todoItems: [],
    showErrorMessage: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formValue === '') {
      this.setState({ showErrorMessage: true });
      return;
    } else {
      this.setState({ showErrorMessage: false });
      this.setState({
        todoItems: [...this.state.todoItems, this.state.formValue],
        formValue: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({ formValue: e.target.value });
  };

  handleDelete = (id) => {
    const todos = [...this.state.todoItems];
    todos.splice(id, 1);
    this.setState({ todoItems: todos });
  };

  render() {
    return (
      <>
        <Title text="Welcome to your To-do App" />
        {this.state.showErrorMessage && <ErrorMessage />}
        <Form
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.formValue}
        />
        <TodoItems>
          {this.state.todoItems.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo}
                handleDelete={() => this.handleDelete(index)}
              />
            );
          })}
        </TodoItems>
        {this.state.todoItems.length === 0 ? null : (
          <h5>
            To mark items as complete you can click them. Click the delete
            button to remove them from the list.
          </h5>
        )}
      </>
    );
  }
}

export default App;
