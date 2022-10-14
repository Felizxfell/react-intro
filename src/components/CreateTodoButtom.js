import React from 'react'
import '../css/CreateTodoButtom.css'

function CreateTodoButtom(props) {
  const {
    setToggleModal
  } = props

  const addToDo = () => {    
    setToggleModal(prevState => !prevState)
  }

  return (
    <div className='box-boton'>
      <button className='boton' onClick={addToDo}>+</button>
    </div>
  )
}

export default CreateTodoButtom