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
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

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
    sincronizeTodos,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader loading={loading} >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <TodosEmpty />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
      // render={todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => completeTodo(todo.text)}
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
      >
        {todo => (
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

      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;