import React, {Component} from "react";

class Message extends  Component{
    state={
        message:'Welcome!'
    }
render(){
    console.log(this);
    return(
        <>
        <div>Hello  {this.props.name}</div>
        <div>Hello  {this.state.message}</div>
        <button>Change Text</button>
        </>
    )
}
}
export default Message
// render:required method implement in class  to render