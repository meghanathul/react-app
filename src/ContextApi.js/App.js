import React from 'react'
import AddStudent from './AddStudent'
import { StudentProvider } from './StudentContext'
import StudentList from './StudentList'
import StudentStatus from './StudentStatus'

const App = () => {
  return (
    <StudentProvider>
      <div>
        <StudentStatus />
        <AddStudent />
        <StudentList />
      </div>
    </StudentProvider>
  )
}

export default App
//Hooks :They allow you to use React feactures without having to write a class.
// Avoid the whole confusion with 'this' keyword.