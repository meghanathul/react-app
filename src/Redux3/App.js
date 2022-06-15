import React from 'react'
import { Provider } from 'react-redux'
import OurCounter from './Redux3/OurCounter'
import store from './Redux3/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <OurCounter />
      </div>
    </Provider>
  )
}

export default App
//** npm i redux-saga 
//REDUX SAGA- is a middleware library used to allow a redux store to interact with resources 
//outside of itself asynchronously.
