import React from 'react'
import useTodos from './useTodos';
import TodoHeader from '../TodoHeader'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import CreateTodoButtom from "../CreateTodoButtom";
import { TodosLoading, TodosEmpty, TodosError } from '../TodoLoading';
import Modal from '../../Modal';

function App() {
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,

    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,

    toggleModal,
    addToDo,
    setToggleModal,
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
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <TodosEmpty />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
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