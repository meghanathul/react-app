import React from 'react'
import { useContext } from 'react'
import Student from './Student'
import { StudentContext } from './StudentContext'

const StudentList = () => {
  // const [students,setStudents]=useState([            //previous
  //   {Name:'Meghana' ,studentClass:'5',info:'student'},
  //   {Name:'Demo' ,studentClass:'5',info:'student'},
  //   {Name:'xyz' ,studentClass:'5',info:'student'},
  // ])
  const [students, setStudents] = useContext(StudentContext);
  const deleteStudent = (ind) => {
    console.log(ind);
    let tempArr = []
    students.map((student) => (student.id === ind) ? '' : tempArr.push(student))
    setStudents(tempArr)
  }

  return (

    <div className='d-flex justify-content-around'>


      {students.map((student, index) =>
        // <h1 key={index}>{student.Name}</h1>
        <Student key={index} index={student.id} name={student.Name} studentClass={student.studentClass} info={student.info} deleteStudent={deleteStudent} />
      )}

    </div>
  )
}

export default StudentList