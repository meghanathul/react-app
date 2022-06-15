import React from 'react'
// 1.Function Component
const FunctionClick = () => {
    const clickHandler = () => {
        console.log('you clicked button !');
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
