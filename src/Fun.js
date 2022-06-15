import React from 'react'

const Fun = (props) => {
  return (
      <>
    <div>function</div>
    <button onClick={()=>props.myfun('Thul')}>click</button>
    </>
  )
}

export default Fun