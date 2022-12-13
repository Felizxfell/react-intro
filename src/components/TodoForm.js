import { React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/TodoForm.css'

const TodoForm = ({ label, submitext, submitEvent, defaultTodoText }) => {
    const navigate = useNavigate()    
    const [todoValue, setTodoValue] = useState(defaultTodoText || '')    

    const onChange = event => {
        setTodoValue(event.target.value)
    }

    const cancelar = () => {
        navigate('/')
    }

    const submitTodo = event => {
        event.preventDefault()
        if (!!todoValue.trim()) {
            submitEvent(todoValue)
            navigate('/')
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <label>{label}</label>
            <textarea
                value={todoValue}
                onChange={onChange}
                placeholder="Escribe un nuevo To Do..."
            />
            <div className="button-container">
                <button
                    type="button"
                    className="todoform-button todoform-button-cancel"
                    onClick={cancelar}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="todoform-button todoform-button-add"
                >
                    {submitext}
                </button>
            </div>
        </form>
    )
}

export default TodoForm