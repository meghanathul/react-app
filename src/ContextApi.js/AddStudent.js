import React from 'react'
import { useContext, useState } from 'react'
import { StudentContext } from './StudentContext'

const AddStudent = () => {
    const [Name, setName] = useState('')
    const [Class, setClass] = useState('')
    const [info, setInfo] = useState('')

    const [students, setStudents] = useContext(StudentContext);
    const handleAddStudent = () => {
        let studentObj = {
            id: students.length,
            Name: Name,
            studentClass: Class,
            info: info
        }
        setStudents([...students, studentObj])
    }
    return (
        <div className='d-flex  justify-content-around'>
            <div className="jumbotron jumbotron-fluid">
                <div className='form-row align-item-center'>
                    <div className='col-auto'>
                        <h3>Name</h3>
                        <input type='text ' className='form-control mb-2' value={Name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='col-auto'>
                        <h3>Class</h3>
                        <input type='text ' className='form-control mb-2' value={Class}
                            onChange={(e) => setClass(e.target.value)} />
                    </div>
                    <div className='col-auto'>
                        <h3>About</h3>
                        <textarea className='form-control mb-2' value={info}
                            onChange={(e) => setInfo(e.target.value)} />
                        <div className='col-auto'>
                        </div>
                        <div className='col-auto'>
                            <button onClick={handleAddStudent} className='btn btn-success'>Add Student</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent