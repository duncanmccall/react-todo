import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodoItem from './components/todo/AddTodoItem';
import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
import './styles/reset.css';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
  
  // Add to do
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <div className="canvas">
              <AddTodoItem addTodo={this.addTodo} />
              <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
            </div>
        </div>
        <Route path="/about" component={About}/>
      </Router>
    )
  }
}

export default App;
