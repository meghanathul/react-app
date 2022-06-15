import React, { createContext, useState } from 'react'
import StudentList from './StudentList';
import StudentStatus from './StudentStatus';

export const StudentContext = createContext();
export const StudentProvider = (props) => {
    const [students, setStudents] = useState([
        // { Name: 'Meghana', studentClass: '5', info: 'student' },
        // { Name: 'Demo', studentClass: '5', info: 'student' },
        // { Name: 'xyz', studentClass: '5', info: 'student' },

    ])
    return (
        <StudentContext.Provider value={[students,setStudents]}>
            {/* <StudentList />
            <StudentStatus /> */}  
            {props.children}
        </StudentContext.Provider>
    )
}
