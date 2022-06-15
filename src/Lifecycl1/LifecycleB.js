import React, { Component } from 'react'

 class LifecycleB extends Component {
// 1
    constructor(){
        super() 
        this.state={
            name:'hii'  
        }       
        console.log('LifecycleB- constructor');
    }

    // 2
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB - getDerivedStateFromProps');
        return null;

    }
    // 4
    componentDidMount(){
        console.log(' LifecycleB - componentDidMount');
    }
    // 3
  render() {
  console.log('LifecycleB - render')
    return (
      <div><h1>LifecycleA</h1>
      {/* <Demo/> */}
      </div>
    )
  }
//   4
}



export default LifecycleB