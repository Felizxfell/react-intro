import React from 'react'
import '../css/CreateTodoButtom.css'

function CreateTodoButtom() {
  return (
    <div className='box-boton'>
      <button className='boton' onClick={() => console.log('click')}>+</button>
    </div>
  )
}

export default CreateTodoButtom