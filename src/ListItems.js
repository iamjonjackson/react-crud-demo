import React, { Component } from 'react';

class ListItems extends Component {

  render() {
    const {items} = this.props;
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
