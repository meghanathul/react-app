import React, { Component } from 'react'

class Constructor extends Component {

  constructor() {
    super();

    this.state = {
      name: "constructor Method"
    }
    
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    console.log('hello',this);
  }

  render() {
    return (
      <div>Constructor {this.state.name}
        <button onClick={this.handlerClick}>click</button>
      </div>
    )
  }
}

export default Constructor