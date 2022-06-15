// rafce

import React from 'react'
// import Getsnap from './Lifecycl1/Getsnap'
// import LifecycleA from './Lifecycl1/LifecycleA'
// import LifecycleC from './Lifecycl1/LifecycleC'
// import Constructor from './Lifecycl1/Constructor.js'
// import GetDerived from './Lifecycl1/GetDerived'  
// import ComponentDM from './Lifecycl1/ComponentDM'
import DyingCompo from './DyingCompo'
// function component


class App extends React.Component {


  state = {
    show: false
  }


  render() {

    return (
      <div>
        {/* <LifecycleA/> */}
        {/* <ComponentDM/> */}
        {/* <Constructor/> */}
        {/* </LifecycleB>  */}
        {/* <LifecycleC/>  */}
        {/* <Getsnap/>     */}

        {/*? means true */}
        {this.state.show ? <DyingCompo /> : ''}

        <button onClick={() => this.setState({ show: !this.state.show })}>click</button>
        {/* <GetDerived nameParent='parent message'/>
       <GetDerived propsData={'/>   */}
      </div>

    )
  }
}

export default App