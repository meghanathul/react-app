import React from 'react'

const Student = ({ name, studentClass, deleteStudent, index, info }) => {
  return (
    <>
      <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">{name}</div>

        <div className="card-body">
          <h5 className="card-title">{studentClass}</h5>
          <i onClick={() => deleteStudent(index)} className="fa fa-trash" style={{ color: 'red', fontSize: '30px' }}></i>
          <p className="card-text"><h3>{info}</h3></p>
        </div>
      </div>
    </>















  )
}

export default Student