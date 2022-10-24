import React from 'react'
import '../css/TodoCounter.css'

const TodoCounter = ({ totalTodos, completedTodos, loading }) =>
{
  return (
    <h2 className={`titulo ${!!loading && 'counter-loading'}`}>
      Has complentado {completedTodos} de {totalTodos} To Do's
    </h2>
  )
}

export default TodoCounter