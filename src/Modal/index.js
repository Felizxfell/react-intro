import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css'

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='modal-container'>
            <div className='modal-body'>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;