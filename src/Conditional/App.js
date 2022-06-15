import React from 'react'
import Login from './Conditional/Login'
import Garage from './Conditional/Garage'
import Goal from './Conditional/Goal'
// CONDITIONAL RANDARING (if else)

// 1.
// const App = () => {
//     return (
//       <div>
//         <Login loggedIn={false}/>   
//       </div>
//     )
//     }
//     export default App

// 2.--conditional

// const cars=['Ford','BMW','Audi']
// const App = () => {
//     return (
//       <div>

//        <Garage cars={cars}/>

//       </div>
//     )
//     }
//     export default App

// 3.turnary
const App = () => {
    return (
      <div>

       <Goal isGoal={false} />
         
      </div>
    )
    }
    export default App
