import React from 'react'
import '../css/TodoItem.css'
import { HiOutlineCheck, HiOutlineTrash } from "react-icons/hi";

function TodoItem(props)
{
    const { completed, text, onComplete, onDelete } = props
    return (
        <li className='item'>
            <span className={`icon icon-check ${completed ? 'icon-check-active' : 'icon-check-false'}`} onClick={onComplete}>                
                <HiOutlineCheck />
            </span>
            <p className={`item-p ${completed && 'item-p-complete'}`}>
                {text}
            </p>
            <span className='delete' onClick={onDelete}>
                <HiOutlineTrash />
            </span>
        </li>
    )
}

export default TodoItem