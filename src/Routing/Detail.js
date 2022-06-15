import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    const location=useLocation();
  return (
    <div>Detail-{location.state}</div>
  )
}

export default Detail