import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { StudentContext } from './StudentContext'

const StudentStatus = () => {
    const [students, setStudents] = useContext(StudentContext);

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Total Students Are:{students.length}</h1><br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default StudentStatus