import React, { useEffect } from 'react'
import ClassCounter from './Hooks/ClassCounter'
import HookCounter from './Hooks/HookCounter'
import ClassCounter1 from './Hooks/ClassCounter1'
import HookCounter1 from './Hooks/HookCounter1'

// import Fun from './Fun'

class App extends React.Component {
  // state={
  //   name:'Meghana'
  // }
  //   change = (e)=>{
  //     console.log('welcome',e)
  //     this.setState({name:e})
  //     }                             //PASSING DATA FROM CHILD TO PARENT BY METHOD


  // useEffect (()=>{
  //   document.title='My App'
  // })                                //change the title


  render() {
    return (
      <div>
        {/* 
        <h1>{this.state.name}</h1> 
        <Fun myfun={this.change}/>    //PASSING DATA FROM CHILD TO PARENT BY METHOD
        <Fun myfun={this.change}/>    
        */}

        {/* <ClassCounter />
        <HookCounter /> */}
        {/* <ClassCounter1/> */}
        <HookCounter1 />
      </div>
    )
  }
}
export default App

