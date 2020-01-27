import React, { Component } from 'react';
import ListItems from './ListItems'
import './App.css';

class App extends Component {
  onSubmit(event) {
    event.preventDefault();
    alert('Submitted');
  }
  render() {
    const title = 'Demo React App';
    return (
      <div className="App">
        <h1>{title}</h1>
        <ListItems />
        <form onSubmit={this.onSubmit}>
          <input />
        </form>
      </div>
    );
  }
}

export default App;
