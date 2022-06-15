import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComp extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'meghana'
       }
     }
     componentDidMount(){
   setInterval(()=>{
  this.setState({
      name:'meghana'
  })
   },2000)
     }
  render() {
      console.log('****************parent Component***************')
    return (
      <div>ParentComp
          <RegularComp name={this.state.name}/>
          <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp