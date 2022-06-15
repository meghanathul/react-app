import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
    console.log('you clicked button !');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClassClick</button>
      </div>
      
    )
  }
}
export default ClassClick
