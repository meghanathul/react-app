import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, incrementCounter } from './counterAction'

const App = () => {
  // const myState=useSelector((state)=>console.log(state))
  const myState=useSelector((state)=>state.handleMyCounter)

  const dispatch=useDispatch()  //Dispatcher will dispatch my action to my reducer.
  return (
    <div>
<button onClick={ ()=>dispatch(decreaseCounter()) }>Minus</button>
<input value={myState}/>
<button onClick={()=> dispatch(incrementCounter()) }>Plus</button>
    </div>
  )
}
// In Html.js
export default App

//FOR REDUX
// ** npm i redux react-redux
// Redux Dev Tool

// REDUX IS STATE CONTAINER FOR JS APPLICATION.
// REDUX IS A PATTERN AND LIBRARY FOR MANAGING AND UPDATING APPLICATION STATE.
// USING EVENT CALLED 'ACTION' IT IS SERVER AS A CENTRALIZE STORE FOR STATE THAT NEED TO BE
// USED ACROSS YOUR ENTIRE APPLICATION WITH SOME RULES.


// ***IMP
// 1.ACTION
// -What to do?
// -collect data from UI or API

//------Syntax:
// {
//   type:'INCREMENT',
//   payload:num
// }

// 2.REDUCER
// -How to do?
// -Get data from action and manage then send to Store.
// Reducer are function that take the current state and an action an argument and return a new state result.

// Syntax:
// const initialvalue=0;
// const changenum=(state=initialvalue,action)=>{
  // switch(action.type){
  //   case 'INCREMENT':return state+action.payload;
  //   case 'DECREMENT':return state+1;
  //   default:return state
  // }
// }


// 3.STORE
// -Object which hold the state of the application.
// You will have only single store in entire application.
// Every redux store has a single reducer function.

// Syntax:
// import { createStore } from 'redux'
// const store=createStore(rootReducer){
// --rootreducer is a combination of all reducer.
// }
