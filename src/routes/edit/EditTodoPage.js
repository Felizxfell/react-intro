import React from 'react'
import TodoForm from '@comp/TodoForm';
import useTodos from '../useTodos';

export default function EditTodoPage() {
  const { addToDo } = useTodos()
  return (
    <>
      <TodoForm
        label="Edita tu To Do"
        submitext="Editar"
        submitEvent={addToDo}
      />
    </>
  )
}
