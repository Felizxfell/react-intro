import React from 'react'
import '../css/TodoList.css'

function TodoList(props) 
{
    const {
        error,
        loading,
        searchedTodos,
        onError,
        onLoading,
        onEmpty,
        render,
    } = props;
    
    return (
        <section>
            {error && onError()}
            {loading && onLoading()}

            {(!loading && !searchedTodos.length) && onEmpty()}

            <ul className='lista'>
                {searchedTodos.map(render)}                
            </ul>
        </section>
    )
}

export default TodoList