import React from 'react'
import './TodoList.css'

function TodoList(props)
{
    return (
        <section>
            <ul className='lista'>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList