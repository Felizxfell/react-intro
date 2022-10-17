import React from 'react'
import '../css/TodoItem.css'

function TodoItem(props)
{
    const { prop, onComplete, onDelete } = props
    return (
        <li className='item'>
            <span className={`icon icon-check ${prop.completed ? 'icon-check-active' : 'icon-check-false'}`} onClick={onComplete}>
                <i className="las la-check"></i>
            </span>
            <p className={`item-p ${prop.completed && 'item-p-complete'}`}>
                {prop.text}
            </p>
            <span className='delete' onClick={onDelete}>
                <i className="las la-trash"></i>
            </span>
        </li>
    )
}

export default TodoItem