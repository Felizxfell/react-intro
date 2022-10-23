import React from 'react'
import '../css/TodoForm.css'

const TodoForm = ({
    addToDo,
    setToggleModal
}) => {
    const [todoValue, setTodoValue] = React.useState('')

    const onChange = event => {
        setTodoValue(event.target.value)
    }

    const cancelar = () => {
        setToggleModal(false)
    }

    const submitTodo = event => {
        event.preventDefault()

        if (!!todoValue.trim()) {
            addToDo(todoValue)
            setToggleModal(false)
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <label>Escribe tu nuevo TODO</label>
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
                    Añadir
                </button>
            </div>
        </form>
    )
}

export default TodoForm