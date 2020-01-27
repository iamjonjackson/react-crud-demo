import React, { Component } from 'react';

class ListItems extends Component {

  render() {
    const items = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    return (
      <div className="ListItems">
        {
          items.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })
        }
      </div>
    );
  }
}

export default ListItems;
