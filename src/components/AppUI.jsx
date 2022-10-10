import React from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";

const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
}) =>
{
    return (
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>            
                {error && <p>Desespérate, hubo un error...</p>}        
                {loading && <p>Estamos cargando, no desesperes...</p>}        
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        prop={todo}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButtom />
        </React.Fragment>
    );
};

export default AppUI;
