import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onClick() {
    alert('Clicked');
  }
  render() {
    const title = 'Demo React App';
    const items = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    return (
      <div className="App">
        <h1>{title}</h1>
        {
          items.map(item => {
            return (
              <li onClick={this.onClick}>{item}</li>
            )
          })
        }
      </div>
    );
  }
}

export default App;
