import React, { Component } from 'react'
import UpdatedComp from './UpdatedComp'
export class HoverComponent extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // } original
    // incretCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }--Original
    render() {
        //new
        const{count,incrementCount}=this.props
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        )
    }
}

export default UpdatedComp(HoverComponent)
// why HOC?
// To share common functionality between component.


// const NewComponent=higherOrderComponent(originalComponent)
//1. taks original,add aditional data and funcitionality to originalcomponent,then
//2.return an enhanced component