import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Action/counterAction';


const OurCounter = () => {

  const myState = useSelector(state => state.handleMyCounter)

  const dispatch = useDispatch();
  return (
    
    <div className='d-flex justify-content-around'>
      <div className='jumborron '>
        <h1 className='display-4'>Our Counter App</h1>

        <h3>Student Age: {myState}</h3>
        <p className='lead'>

          <button className='btn btn-success mx-4 my-4' onClick={() => dispatch(increment())}>Increment</button>
          <button className='btn btn-secondary' onClick={() => dispatch(decrement())}>Decrement</button>

        </p>
      </div>
      
    </div>
  )
}

export default OurCounter