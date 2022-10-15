import React from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";
import { TodoContext } from './TodoContext';
import { TodoLoading, TodosEmpty, TodosError } from './TodoLoading';
import TodoForm from './TodoForm';
import Modal from '../Modal';

const AppUI = () =>
{
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        toggleModal,
        setToggleModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
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
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButtom
                setToggleModal={setToggleModal}
            />
        </React.Fragment>
    );
};

export default AppUI;
