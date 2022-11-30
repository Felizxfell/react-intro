import React from 'react'
import useTodos from '../useTodos';
import TodoHeader from '../../components/TodoHeader'
import TodoCounter from '../../components/TodoCounter'
import TodoSearch from '../../components/TodoSearch'
import TodoList from '../../components/TodoList';
import TodoItem from '../../components/TodoItem';
import TodoForm from '../../components/TodoForm';
import CreateTodoButtom from "../../components/CreateTodoButtom";
import { TodosLoading, TodosEmpty, TodosError } from '../../components/TodoLoading';
import Modal from '../../Modal';
import ChangeAlert from '../../components/ChangeAlert';

export default function HomePage() {
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
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
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
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}