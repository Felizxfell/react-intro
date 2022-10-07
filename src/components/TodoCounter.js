import React from 'react'
import '../css/TodoCounter.css'

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className='titulo'> Has complentado {completed} de {total} To Do's</h2>
  )
}

export default TodoCounter