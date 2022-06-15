import React, { Component } from 'react'

export class Getsnap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'Meghana'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Getsnap - getDerivedStateFromProps');
        return null;

    }
    
    
    shouldComponentUpdate() {
        console.log(' Getsnap-shouldComponentUpdate')
        return null
    }

    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name:'Thul updated' })
        }, 5000)
    }

    getSnapshotBeforeUpdate(prevPrpos, prevState) {
        document.getElementById('previous-state').innerHTML = prevState.name
        // console.log(' LifecycleC-getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        document.getElementById('current-state').innerHTML = this.state.name
    }

    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p id='current-state'></p>
                <p id='previous-state'></p>

                {/* <button onClick={this.changeMyState}>change</button> */}
            </div>
        )
    }
}

export default Getsnap