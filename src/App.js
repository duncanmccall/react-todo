import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodoItem from './components/todo/AddTodoItem';
import './styles/reset.css';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Laundry',
        completed: false
      }     
    ]
  }
  
  // Toggle to do complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  // Delete to do
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
          <div className="canvas">
            <AddTodoItem />
            <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
          </div>
      </div>
    )
  }
}

export default App;
