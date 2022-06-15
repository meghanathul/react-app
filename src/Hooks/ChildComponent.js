import React from 'react'
import { useEffect } from 'react/cjs/react.development'

const ChildComponent = () => {
  useEffect(()=>{
    return()=>{                 //unmounting
    console.log('Dia :-(......')
    }
  })
  return (
    <div>
      <h1>WELCOME .....</h1>
    </div>
  )
}

export default ChildComponent  