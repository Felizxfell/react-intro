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
        onEmptySearchResults,
        render,
        totalTodos,
        searchText,
    } = props;

    const renderFunc = props.children || render;

    return (
        <section>
            {error && onError()}
            {loading && onLoading()}

            {(!loading && !totalTodos) && onEmpty()}

            {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}

            <ul className='lista'>
                {searchedTodos.map(renderFunc)}
            </ul>
        </section>
    )
}

export default TodoList