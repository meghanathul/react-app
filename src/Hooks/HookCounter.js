import React, { useEffect, useState } from 'react'
 
const h1 = {
    color: 'green'
}
const HookCounter = () => {
    const [count, setCount] = useState(0);   //count=0 from class fun
    const ChangeValue = () => {
        setCount(count + 1);

    }

    // for reverse
    const [count2, setCount2] = useState(10);    //for reverse
    // const ChangeValue1 =()=>{
    //     setCount2(count2+1);

    // }             ---------------with seperate function


    //For string
    const [Greet, setGreet] = useState('Hello');
    const changeGreet = () => {
        setGreet('Welcome');

    }
    <h1>Object</h1>
    const [name, setName] = useState({
        FirstName: '', lastName: ''
    })

    //Array
    const [items, setItems] = useState([])
    const additem = () => {
        setItems([...items, { id: items.length,
             value: Math.floor(Math.random() * 10) + 1 }])
    }


    useEffect(() => {
        console.log('good');
        document.title='React Hook'
    })

    // input
    const [demo, setDemo] = useState('')
    const [userTypeValue, setUserTypeValue] = useState([])
    const addName = () => {
        setUserTypeValue([...userTypeValue, demo])
    }
    return (
        <div>
            <form>
                <h1>{name.FirstName}  {name.lastName}</h1>
                <input type='text' value={name.FirstName} onChange={
                    // (e) => setName({ FirstName: e.target.value })
                    //For storing value
                    (e) => setName({ ...name, FirstName: e.target.value })
                } />

                <input type='text' value={name.lastName} onChange={
                    // (e) => setName({ lastName: e.target.value })
                    //For storing value
                    (e) => setName({ ...name, lastName: e.target.value })
                } />
            </form>

            <h2># For Function</h2>
            <button onClick={ChangeValue}> Function Click: {count}</button>
            {/* <button onClick={()=>{setCount( count + 1 )}}>Function Click:{count}</button> */}


            <h2># For Reverse</h2>
            <button onClick={() => { setCount2(count2 - 1) }}>Reverse Click:{count2}</button>


            <h2># For String</h2>
            <h1 style={h1}>{Greet}</h1>
            <button onClick={changeGreet}>String Click</button>
            {/* <button onClick={()=>{setGreet('Welcome')}}>String Click</button>  */}


            <h2># Arrey</h2>
            <div>
                <ul>
                    {items.map((item) =>
                    <li key={item.id}>{item.id}{item.value}</li>)}
                </ul>
                <button onClick={additem}>Add a Number</button>
            </div>


            <h2># Input</h2>
            {
                userTypeValue.map((demo) => <h2 key={demo.id}> {demo}</h2>)
            }
            < input value={demo}  onChange={(e) =>  setDemo(e.target.value)} ></input>
            <button onClick={addName}>ADD</button>
        </div>
    )
}

export default HookCounter


//useState Hook allow to use state in function component.
// in classes the state is always an object.
// useState return an Array with only 2 Element
// 1)current value
// 2)state-settar function
// when working with object or arrey alwalys make sure use spread operator
// use key when using map for unique value.