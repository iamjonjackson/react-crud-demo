import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onSubmit(event) {
    event.preventDefault();
    alert('Submitted');
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
              <li key={item} onMouseOver={this.onMouseOver}>{item}</li>
            )
          })
        }
        <form onSubmit={this.onSubmit}>
          <input />
        </form>
        
      </div>
    );
  }
}

export default App;
