import React from 'react'
import AppUI from './AppUI'
import { TodoProvider } from './TodoContext';

function App()
{
  const [state, setState] = React.useState('estado compartido');
  // return (
  //   <TodoProvider>
  //     <AppUI />
  //   </TodoProvider>
  // );
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  )
}

const TodoHeader = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
}
const TodoList = ({ children }) => {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  );
}
const TodoCounter = () => {
  return <p>TodoCounter</p>;
}
const TodoSearch = () => {
  return <p>TodoSearch</p>;
}
const TodoItem = ({ state }) => {
  return <p>TodoItem: {state}</p>;
}

export default App;