import React, { Component } from 'react'

export class ComponentDM extends Component {
    constructor(props){
        super(props)
        this.state={
            // name:'gvhnm'
            data:[]
           
        }
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
        .then(Apidata=>this.setState({data:Apidata}))
    
        // setTimeout(()=>{
       //     this.setState({name:'gtfvhj'})  //updated value of state
      // },4000)

    }
  render() {
    console.log(this.state.data)
    return (
      <div>
          {/* {this.state.name} */}
          {this.state.data.map((user)=>
          <div>{user.name}</div>)}
          
      </div>
    )
  }
}

export default ComponentDM