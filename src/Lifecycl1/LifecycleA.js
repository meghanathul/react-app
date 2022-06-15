import React, { Component } from 'react'
import LifecycleB from './Lifecycl1/LifecycleB'


class LifecycleA extends Component {
  // 1
  constructor() {   //rconst
    super()     //it is used to call the constructor of its parent class.
    this.state = {
      name: 'hii'
    }
    console.log('LifecycleA - constructor');
  }

  // 2
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA - getDerivedStateFromProps');
    return null;   //we should return something.(updated value-object)
  }

  // 4
  componentDidMount() {
    console.log(' LifecycleA - componentDidMount');
  }

  // 3
  render() {
    console.log('LifecycleA - render')
    return (
      <div>
        <h1>LifecycleA </h1>
        <LifecycleB />
      </div>
    )
  }

}

export default LifecycleA