import React from 'react'
import { useNavigate } from 'react-router-dom';
import useTodos from '../useTodos';
import TodoHeader from '@comp/TodoHeader'
import TodoCounter from '@comp/TodoCounter'
import TodoSearch from '@comp/TodoSearch'
import TodoList from '@comp/TodoList';
import TodoItem from '@comp/TodoItem';
import CreateTodoButtom from "@comp/CreateTodoButtom";
import ChangeAlert from '@comp/ChangeAlert';
import { TodosLoading, TodosEmpty, TodosError } from '@comp/TodoLoading';
import Modal from '../../Modal';

export default function HomePage() {
  const navigate = useNavigate()
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
            onEdit={() => navigate('/edit/' + todo.id)}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* {toggleModal && (
        <Modal>
          <TodoForm
            addToDo={addToDo}
            setToggleModal={setToggleModal}
          />
        </Modal>
      )} */}

      <CreateTodoButtom
        onClick={() => navigate('/new') }
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}