import React from 'react'
import { TodoContext } from './TodoContext'
import '../css/TodoCounter.css'

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  return (
    <h2 className='titulo'> Has complentado {completedTodos} de {totalTodos} To Do's</h2>
  )
}

export default TodoCounter