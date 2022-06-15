import React from 'react'

const Student = ({index,studentObj}) => {

  // const {name,country}=student   //for table
  return (
<div style={{border:'2px groove green',width:'400px'}}>
        <h1 style={{color:'blue'}}>{index}</h1>
        <hr/>
        <h2>Name:<h3> {studentObj.name}</h3></h2>
        <h2>Country: <h3>{studentObj.country}</h3></h2>
        
    </div>
      
    
  )

}
export default Student

// import React from 'react'
// // import * as React from 'react';
// import {Link} from 'react-router-dom'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useDispatch, useSelector } from 'react-redux'

// // const studentInfo=[
  
// //     {Id:1,name: "John",age: 26,course : "MERN",batch : "October"},
// //   { Id:2,name: "Doe",age: 25,course : "MERN",batch : "November" }, 
// //   {Id:3,name: "Biden",age: 26,course : "MERN",batch : "September" },
// //   {Id:4,name: "Barar",age: 22,course : "MERN",batch : "September"},
// //    {Id:5,name: "Christ",age: 22,course : "MERN",batch : "Octomber"}
// // ];
//  const Student = ({student})=>{

  
//   return (
//       <>
//              <h1 style={{fontSize:40,padding:30}}>Student Details</h1>
//        <button id='change-btn'><Link to='/addstudent' className='addlink' href="#">Add new student</Link></button>
//     <TableContainer  component={Paper}>
//       <Table sx={{ minWidth: 650 }}  aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell ><b>Name</b></TableCell>
//             <TableCell align="right"><b>Age</b></TableCell>
//             <TableCell align="right"><b>Course</b></TableCell>
//             <TableCell align="right"><b>Batch</b></TableCell>
//             <TableCell align="right"><b>Change</b></TableCell>
            
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {student.map((student) => (
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="studentObj">{student.name}</TableCell>
//               <TableCell align="right">{student.country}</TableCell>
//               <TableCell align="right">{student.course}</TableCell>
//               <TableCell align="right">{student.batch}</TableCell>
//               <TableCell align='right'><Link to={`/addstudent/${student.Id}`}>Edit</Link></TableCell>
              
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
    
//     </>
//   );
//           }
// export default Student












