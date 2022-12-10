import React from 'react'
import useLocalStorage from './useLocalStorage'

const useTodos = () => {
  // Estado inicial de nuestros TODOs
  const {
    item: todos,
    saveItem: saveTodoList,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
    sincronizedItem: sincronizeditemstatus
  } = useLocalStorage('todoListv2', []);

  const [searchValue, setSearchValue] = React.useState('');

  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addToDo = (text) => {
    if (sincronizeditemstatus) {
      const id = newTodoId(todos)
      const newTodos = [...todos];
      newTodos.push({
        id,
        text,
        completed: false
      })
      saveTodoList(newTodos)
    }
  }

  const getTodo = id => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    return todos[todoIndex]
  }

  const completeTodo = (id) => {
    if (sincronizeditemstatus) {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodoList(newTodos);
    }
  };

  const editTodo = (id, newtext) => {
    if (sincronizeditemstatus) {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex].text = newtext;
      saveTodoList(newTodos);
    }
  };

  const deleteTodo = (id) => {
    if (sincronizeditemstatus) {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodoList(newTodos);
    }
  };

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    getTodo,
    completeTodo,
    editTodo,
    deleteTodo,
    addToDo,
    sincronizeTodos
  };
}

export default useTodos;

const newTodoId = (todolist) => {
  if (!todolist.length){
    return 1;
  }
  const idlist = todolist.map(todo => todo.id)
  const idMax = Math.max(...idlist)
  return idMax + 1;
}