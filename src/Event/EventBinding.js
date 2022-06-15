import React, { Component } from 'react'

export class EventBinding extends Component {

  state = {
    message: 'WELCOME'
  }

  clickHandler() {
    // console.log("click")
    // console.log(this); //if not then we get undefined
    this.setState({
      message: 'GOODBYE!'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={() => this.clickHandler()}>Click Button</button>
      </div>
    )
  }
}

export default EventBinding
// 1.binding in render method--this.clickhandler.bind
// 2.arrow function


// whenever props value or state value change then component will rerender 