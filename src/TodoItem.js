import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    const { prop } = props

    const onComplete = () => {
        alert('Ya completaste el todo ' + prop.text);
    };
    const onDelete = () => {
        alert('Borraste el todo ' + prop.text);
    };

    return (
        <li className='item'>
            <span className={`icon icon-check ${prop.completed && 'icon-check-active'}`} onClick={onComplete}>
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