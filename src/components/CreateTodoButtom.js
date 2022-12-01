import React from 'react'
import '../css/CreateTodoButtom.css'
import { HiOutlinePlusSm } from "react-icons/hi";

function CreateTodoButtom({ onClick }) {  

  return (
    <div className='box-boton'>
      <button className='boton' onClick={onClick}>
        <HiOutlinePlusSm />
      </button>
    </div>
  )
}

export default CreateTodoButtom