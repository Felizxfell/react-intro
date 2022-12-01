import React from 'react'
import TodoForm from '@comp/TodoForm';
import useTodos from '../useTodos';

export default function NewTodoPage() {
  const { addToDo } = useTodos()
  return (
    <>
      <TodoForm
        label="Escribe tu nuevo To Do"
        submitext="Añadir"
        submitEvent={addToDo}
      />
    </>
  )
}
