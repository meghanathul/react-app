import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux2/store'
import AddStudent from './Redux2/AddStudent'
// import rootReducer from './rootReducer.js'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <AddStudent />
        </div>
      </Provider>

    </div>
  )
}

export default App