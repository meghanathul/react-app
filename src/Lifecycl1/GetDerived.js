import React, { Component } from 'react'

class GetDerived extends Component {
    constructor(){     //for accepting props we have to pass props in constructor ans super
        super();
        this.state={
            name:'child message'
        }
    }
    static getDerivedStateFromProps(props,state){
        return{name : props.nameParent}
        // return{name : 'bbbbbb'}
    }
  render() {
    return (
      <div>GetDerived{this.state.name}</div>
    )
  }
}

export default GetDerived
