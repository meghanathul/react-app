import React, { Component } from 'react'

// UPDATING
export class LifecycleC extends Component {
    constructor(props) {   //mounting
        super(props)
        this.state = {
            name: 'Meghana'
        }
        console.log('LifecycleC - constructor')
    }
changeMyState=()=>{
    this.setState(
        {
            name:'good'
        }
    )
}
    //1
    static getDerivedStateFromProps(props, state) {    //mounting
        console.log('LifecycleC - getDerivedStateFromProps');
        return null;

    }

    //5
    componentDidUpdate() {     //mounting
        console.log(' LifecycleC - componentDidMount');
    }

    //2
    shouldComponentUpdate() {
        console.log(' LifecycleC-shouldComponentUpdate')
        return true
    }

    //4
    getSnapshotBeforeUpdate() {
        console.log(' LifecycleC-getSnapshotBeforeUpdate');
        return null
    }

    //3
    render() { 
        console.log('LifecycleC-render')    //mounting
        return (
            <div>LifecycleC
                <h1>{this.state.name}</h1>
                <button onClick={this.changeMyState}>change</button>
            </div>
        )
    }
}

export default LifecycleC