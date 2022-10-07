import React from 'react'
import '../css/TodoItem.css'

function TodoItem(props) {
    const { prop, onComplete, onDelete } = props

    // const onComplete = () => {
    //     alert('Ya completaste el to do ' + prop.text);
    // };
    // const onDelete = () => {
    //     alert('Borraste el to do ' + prop.text);
    // };

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