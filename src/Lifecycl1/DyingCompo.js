import React, { Component } from 'react'

export class DyingCompo extends Component {
    componentWillUnmount(){
        console.log('i am going to die :(');
    }
  render() {
    return (
      <div>DyingCompo</div>
    )
  }
}
export default DyingCompo