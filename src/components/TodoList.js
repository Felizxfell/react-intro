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
    } = props

    return (
        <section>
            {error && onError()}
            {loading && onLoading()}

            {(!loading && !searchedTodos.length) && onEmpty()}

            {searchedTodos.map(render)}

            <ul className='lista'>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList