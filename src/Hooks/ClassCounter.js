import React, { Component } from 'react'
const demo={
 backgroundColor:'blue',
 color:'white',
 border:'2px solid green',
 margin:'30px',
 borderRadious:'20px',
 padding:'20px'
}

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increamentCount = ()    =>  {
        this.setState( {
            count : this.state.count + 1
        } )
    }
    render() {
        return (
            <div>
                <h2># For Class</h2>
                <button style={demo} onClick={this.increamentCount}> Count : {this.state.count} </button> 
            </div>
        )
    }
}

export default ClassCounter
