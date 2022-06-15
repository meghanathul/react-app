import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }
  handleUserNameChange = (e) => {
    console.log('welcome')
    this.setState = ({
      useranme: e.target.value.toUpperCase()
    })
  }
  render() {
    return (
      <form>
        <div>
          <label><h3><b> Username : </b></h3></label>
          <br />
          <input type='text' value={this.state.username} onChange={this.handleUserNameChange} />
          {/* <br/>
            <button >Submit</button> */}
        </div>
      </form>
    )
  }
}

export default Form
//Two state
//1.Component state
//2.onChange
//A controle component:--A controle component is a component that renders form element 
//and controles them by keeping the form data in the control component state.


