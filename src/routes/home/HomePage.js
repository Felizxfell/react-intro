import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useTodos from '../useTodos';
import TodoHeader from '@comp/TodoHeader'
import TodoCounter from '@comp/TodoCounter'
import TodoSearch from '@comp/TodoSearch'
import TodoList from '@comp/TodoList';
import TodoItem from '@comp/TodoItem';
import CreateTodoButtom from "@comp/CreateTodoButtom";
import ChangeAlert from '@comp/ChangeAlert';
import { TodosLoading, TodosEmpty, TodosError } from '@comp/TodoLoading';

export default function HomePage() {
  const navigate = useNavigate()  
  let [searchParams, setSearchParams] = useSearchParams();

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
          searchParams={searchParams} 
          setSearchParams={setSearchParams}
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
            onEdit={() => {
              navigate('/edit/' + todo.id,
              {
                state: { todo }
              })
            }}
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