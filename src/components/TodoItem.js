import React from 'react'
import '../css/TodoItem.css'

function TodoItem(props)
{
    const { completed, text, onComplete, onDelete } = props
    return (
        <li className='item'>
            <span className={`icon icon-check ${completed ? 'icon-check-active' : 'icon-check-false'}`} onClick={onComplete}>
                <i className="las la-check"></i>
            </span>
            <p className={`item-p ${completed && 'item-p-complete'}`}>
                {text}
            </p>
            <span className='delete' onClick={onDelete}>
                <i className="las la-trash"></i>
            </span>
        </li>
    )
}

export default TodoItem