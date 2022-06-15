import React from 'react'


function MadeGoal() {
  return <h1>Goooal</h1>
}

function MissGoal() {
  return <h1>Misss :-(</h1>
}
const Goal = (props) => {
 const isGoal=props.isGoal
  return (
    <div>
      {isGoal ? <MadeGoal /> : <MissGoal />}
    </div>
    // (a>5 ? true : false )
  )
}

export default Goal