import React from 'react'
import '../css/CreateTodoButtom.css'
import { HiOutlinePlusSm, HiX } from "react-icons/hi";

function CreateTodoButtom(props) {
  const {
    toggleModal,
    setToggleModal
  } = props

  const addToDo = () => {
    setToggleModal(prevState => !prevState)
  }

  return (
    <div className='box-boton'>
      <button className='boton' onClick={addToDo}>
        {toggleModal ? <HiX /> : <HiOutlinePlusSm />}
      </button>
    </div>
  )
}

export default CreateTodoButtom