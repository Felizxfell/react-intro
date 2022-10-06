import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className='titulo'> Has complentado {completed} de {total} ToDos</h2>
  )
}

export default TodoCounter