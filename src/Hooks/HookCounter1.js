import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent'

const HookCounter1 = () => {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('')


  // for child
  const [toggle, setToggle] = useState(false)


  // useEffect(() => {                   // called every time
  //   console.log('use effect');
  //   document.title = `Clicked ${count} Time`
  // })

  useEffect(() => {                        //called in mouting + changing state only
    console.log('use effect');
    document.title = `Clicked ${count} Time`
  }, [count])

  // useEffect(() => {                   //only called in mounting state
  //   console.log('use effect');
  //   document.title = `Clicked ${count} Time`
  // }, [])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click ({count}) Times</button>
      <br />
      <br />
      <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
      <br />
      <br />

      <button onClick={() => setToggle(!toggle)}>Show | Dissable </button>

      {
        toggle ? <ChildComponent /> : ''
      }
    </>
  )
}

export default HookCounter1