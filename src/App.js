import React, { Component } from 'react';
import ListItems from './ListItems'
import './App.css';

class App extends Component {
  onSubmit(event) {
    event.preventDefault();
    alert('Submitted');
  }
  render() {
    const items = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    const title = 'Demo React App';
    return (
      <div className="App">
        <h1>{title}</h1>
        <ListItems
          items={items}
        />
        <form onSubmit={this.onSubmit}>
          <input />
        </form>
      </div>
    );
  }
}

export default App;
