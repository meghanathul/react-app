import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const GithubApi = () => {
    const [users, setUsers] = useState([])

    // const getUsers = async () => {
    //     const res = await fetch('https://api.github.com/users')
    //     const data=await res.json();
    //     console.log(data)
    //      setUsers(data)
    // }


    // with axios
    const getUsers = async () => {
        const res = await axios.get('https://api.github.com/users')
        console.log(res.data)
        setUsers(res.data)
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div style={{background:'lightgray'}}>
            <h1 style={{ textAlign: 'center' }}><u>Name of users</u></h1>
            <div style={{ width: '95vw', display: 'flex', flexWrap: 'wrap' }}>
                {
                    users.map((user) =>
                        <div  >
                            <div className="card" style={{ width: '20rem', margin: '50px' }}>
                                <img className="card-img-top" src={user.avatar_url} alt={user.avatar_url} />
                                <div className="card-body">
                                    <h5 className="card-title">{user.login}</h5>
                                    <h4 className="card-text">Access or create Docs or Drive files with their account. Other users who have access to that user's existing documents can continue to access the documents. </h4>
                                    <a href='#'>{user.url}</a>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div >

        </div>
    )
}

export default GithubApi






//GET-->
// async function callApi(){
// const res=await fetch('')
// const data=await res.json()
// console.log(data)
// }
// callApi()

//Post-->
// async function callApi(){
//   const res = await fetch('')
//   methos:'POST',
//   header:{
//     'content':'application/json'
//   },
//   body.JSON.stringfy({
//     name:'meghana'
//   })
// const data=await res.json()
// console.log(data)
// }
// callApi()