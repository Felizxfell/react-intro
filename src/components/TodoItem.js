import React from 'react'
import '../css/TodoItem.css'
import { HiOutlineCheck, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

function TodoItem(props) {
    const { completed, text, onEdit, onComplete, onDelete } = props
    return (
        <li className='item'>
            <span className={`icon icon-check ${completed ? 'icon-check-active' : 'icon-check-false'}`} onClick={onComplete}>
                <HiOutlineCheck />
            </span>
            <p className={`item-p ${completed && 'item-p-complete'}`}>
                {text}
            </p>
            <span className='edit' onClick={onEdit}>
                <HiOutlinePencil />
            </span>
            <span className='delete' onClick={onDelete}>
                <HiOutlineTrash />
            </span>
        </li>
    )
}

export default TodoItem