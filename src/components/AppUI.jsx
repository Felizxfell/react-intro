import React from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";
import { TodoContext } from './TodoContext';

const AppUI = () =>
{
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
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
