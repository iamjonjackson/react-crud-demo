import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const title = 'React Todo App';
    return (
      <div className="App">
        <h1>{title}</h1>
        <div className="row mt-4">
          <div className="col-6">
            <h3>Add Todo</h3>
          </div>
          <div className="col-6">
            <h3>View Todos</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
