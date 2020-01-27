import React from 'react';
import './App.css';

function App() {
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
            <li>{item}</li>
          )
        })
      }
    </div>
  );
}

export default App;
