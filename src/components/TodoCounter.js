import React from 'react'
import '../css/TodoCounter.css'

const TodoCounter = ({ totalTodos, completedTodos }) => {

  return (
    <h2 className='titulo'> Has complentado {completedTodos} de {totalTodos} To Do's</h2>
  )
}

export default TodoCounter