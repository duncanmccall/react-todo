import React, { Component } from 'react';
import Todos from './components/Todos';
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
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
