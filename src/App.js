import React from 'react'
import TodoCounter from './TodoCounter'
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem'
import CreateTodoButtom from './CreateTodoButtom'
// import "./App.css";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  // Estado inicial de nuestros TODOs
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} prop={todo} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;

