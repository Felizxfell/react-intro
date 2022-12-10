import React from 'react'
import TodoForm from '@comp/TodoForm';
import useTodos from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

export default function EditTodoPage() {
  const { editTodo, getTodo, loading } = useTodos()
  const params = useParams()
  const location = useLocation()
  const id = Number(params.id)

  let todoText;
  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id)
    todoText = todo.text
  }

  return (
    <>
      <TodoForm
        label="Edita tu To Do"
        defaultTodoText={todoText}
        submitext="Editar"
        submitEvent={(newtext) => editTodo(id, newtext)}
      />
    </>
  )
}
