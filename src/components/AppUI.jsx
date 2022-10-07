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
}) =>
{
    return (
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
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
