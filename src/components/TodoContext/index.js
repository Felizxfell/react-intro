import React from 'react'
import useLocalStorage from './useLocalStorage'

const TodoContext = React.createContext();

const TodoProvider = props => {
    // Estado inicial de nuestros TODOs
    const {
        item: todos,
        saveItem: saveTodoList,
        loading,
        error,
      } = useLocalStorage('todoList', []);
    
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };