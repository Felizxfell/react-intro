import React from 'react'
import AppUI from './AppUI'
import { TodoProvider } from './TodoContext';



function App() {
  // const listTodos = [
  //   { text: 'Cortar cebolla', completed: false },
  //   { text: 'Tormar el curso de intro a react', completed: true },
  //   { text: 'Llorar con la llorona', completed: false },
  //   { text: 'LALALALAA', completed: false },
  // ];

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

