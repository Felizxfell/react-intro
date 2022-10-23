import React from 'react'
import useTodos from './useTodos';
import TodoHeader from '../TodoHeader'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import CreateTodoButtom from "../CreateTodoButtom";
import { TodoLoading, TodosEmpty, TodosError } from '../TodoLoading';
import Modal from '../../Modal';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    toggleModal,
    addToDo,
    setToggleModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <TodosError />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            prop={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {toggleModal && (
        <Modal>
          <TodoForm 
            addToDo={addToDo}
            setToggleModal={setToggleModal}
          />
        </Modal>
      )}

      <CreateTodoButtom
        setToggleModal={setToggleModal}
      />
    </React.Fragment>
  );
}

export default App;