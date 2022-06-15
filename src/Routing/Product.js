import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Product</h1>
        <h3>Every product below</h3>
        <NavLink
        style={
          ({isActive})=>{
            return{
              backgroundColor:isActive ? 'green' : 'black',
              background:isActive ? 'indigo' : 'grey'}}
             
            }    
         to='/product/mobile' className='btn btn-primary'>Mobile</NavLink>
        
        <NavLink
        style={
          ({isActive})=>{
            return{
              backgroundColor:isActive ? 'green' : 'black'}}
        }
         to='/product/laptop' className='btn btn-primary'>Laptop</NavLink>
        
        <Outlet/>
    </div>
  )
}

export default Product
// {/* <Link className='btn btn-success' to='/product/mobile'>Mobile</Link>
//         <Link className='btn btn-danger' to='/product/laptop'>Laptop</Link> */}
        