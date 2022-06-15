import React from 'react'
import ClickCounter from './HOC/ClickCounter'
import HoverComponent from './HOC/HoverComponent'
import UpdatedComp from './HOC/UpdatedComp'

const App = () => {
  return (
    <div>
      <ClickCounter />
      <HoverComponent />
      <UpdatedComp />
    </div>
  )
}

export default App