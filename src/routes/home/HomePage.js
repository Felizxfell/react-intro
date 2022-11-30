import React from 'react'
import useTodos from '../useTodos';
import TodoHeader from '@comp/TodoHeader'
import TodoCounter from '@comp/TodoCounter'
import TodoSearch from '@comp/TodoSearch'
import TodoList from '@comp/TodoList';
import TodoItem from '@comp/TodoItem';
import TodoForm from '@comp/TodoForm';
import CreateTodoButtom from "@comp/CreateTodoButtom";
import { TodosLoading, TodosEmpty, TodosError } from '@comp/TodoLoading';
import Modal from '../../Modal';
import ChangeAlert from '@comp/ChangeAlert';

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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => console.log('Editar to do')}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
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
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}