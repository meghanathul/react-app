import React from 'react'

const Garage = (props) => {
    const cars=props.cars;

  return (
    <div>
        <h1>Garage</h1>
        {
          // if{a && b }
            cars.length > 2 && <h2>Resease The Cars.</h2>
        }
        {/* all condition schould true */}
    </div>
  )
}

export default Garage