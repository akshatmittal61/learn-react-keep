import React from 'react'
import './note.css'

const Note = ({title,desc,color}) => {
  return (
    <div className='note' style={{
        backgroundColor: color
    }}>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Note