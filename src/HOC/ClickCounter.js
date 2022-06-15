import React, { Component } from 'react'
import UpdatedComp from './UpdatedComp'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }Original
    render() {
//new
const{count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}> Click {count} Time</button>
            </div>
        )
    }
}

export default UpdatedComp(ClickCounter)