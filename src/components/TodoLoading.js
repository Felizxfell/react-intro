import React from 'react'
import '../css/TodoLoading.css'

const TodosLoading = () => {
    return (
        <div className='load-container'>
            <div className='load-background'>
                <div className='bar'></div>
                <div className='mask thick'></div>
                <div className='bar'></div>
                <div className='mask thick'></div>
                <div className='bar'></div>
                <div className='mask thick'></div>
                <div className='bar'></div>
            </div>
        </div>
    )
}

export { TodosLoading };

const TodosEmpty = () => {
    return (
        <div className='sindata-container'>
            <p>¡Crea tu primer TODO!</p>
        </div>
    )
}

export { TodosEmpty };

const TodosError = () => {
    return (
        <div className='sindata-container'>
            <p>Desespérate, hubo un error...</p>
        </div>
    )
}

export { TodosError };