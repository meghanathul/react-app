import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from './Action/StudentAction'
import Student from './Student.js'
// import studentReducer from './Reducer/StudentReduser'
const AddStudent = () => {
    const [student, setStudent] = useState({ name: '', country: '' })


    const dispatch = useDispatch()
    const studentDataFromStore = useSelector((state) => state.studentReducer);

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(student)
        const { name, country } = student;
        if (name === '' || country === '') return;
        dispatch(addStudent(student))
        setStudent({ name: '', country: '' })
    }

    return (
        <div className='container'>
            <div>
                <h1>Add New Student</h1>
                <form onSubmit={handleSubmit}>
                    <lable htmlFor='name'>Name</lable>
                    <br />

                    <input type='text' name='name' value={student.name}
                        onChange={(e) => setStudent({ ...student, name: e.target.value })} placeholder='Enter your name...' style={{ marginBottom: '20px' }} />
                    <br />

                    <lable htmlFor='country'>Country</lable>
                    <br />

                    <input type='text' name='country' value={student.country}
                        onChange={(e) => setStudent({ ...student, country: e.target.value })} placeholder='Enter your country....' style={{ marginBottom: '20px' }} />
                    <br />

                    <button type='submit'>Add Submit</button>
                </form>
                {/* {
                    studentDataFromStore.map((student, index) =>
                    <Student key={index} index={index} studentObj={student} />)
                } */}
            </div>
        </div>
    )
}

export default AddStudent