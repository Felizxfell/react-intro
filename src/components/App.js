import React from 'react'
import AppUI from './AppUI'
// import "./App.css";

const useLocalStorage = (itemName, initValue) => {    
  if (!!localStorage.getItem(itemName)){
    initValue = JSON.parse(localStorage.getItem(itemName))
  } else {
    localStorage.setItem(itemName, JSON.stringify(initValue))
    initValue = JSON.parse(localStorage.getItem(itemName))
  }

  const [item, setItem] = React.useState(initValue);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);    
  }

  return [
    item,
    saveItem
  ];
}

function App() {
  // listTodos = [
  //   { text: 'Cortar cebolla', completed: false },
  //   { text: 'Tormar el curso de intro a react', completed: true },
  //   { text: 'Llorar con la llorona', completed: false },
  //   { text: 'LALALALAA', completed: false },
  // ];

  // Estado inicial de nuestros TODOs  
  const [todos, saveTodoList] = useLocalStorage('todoList', []);

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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodoList(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodoList(newTodos);
  };
  

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

