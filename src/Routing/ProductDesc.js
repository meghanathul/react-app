import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDesc = () => {
    const { myMobileParam } = useParams();
    const navigate = useNavigate()
    return (
        <div><h1>ProductName:{myMobileParam}</h1>
            <button className='btn btn-warning' onClick={() => navigate('/detail', { state: myMobileParam })}><b>Description</b></button>

            <button className='btn btn-primary'>Buy</button>

        </div>
    )
}

export default ProductDesc