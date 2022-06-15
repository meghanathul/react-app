import React from 'react'
function Welcome(){
    return(
        <>
        <h1>Welcome meghana</h1>
        <button>Logout!</button>
        </>
    )
        
}
function Guest(){
    return(
        <>
        <h1>Please Login!</h1>
        <button>Login!</button>
        </>
    )
        
}

const Login = (props) => {
    const loggedIn=props.loggedIn
    // const Login = ({loggedIn}) => {    //direct
    if(loggedIn){
        return<Welcome/>
    }
    return <Guest/>
  
}

export default Login