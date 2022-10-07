import React from 'react'
import '../css/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
      className='inputsearch'
      value={searchValue}
      onChange={onSearchValueChange}
      placeholder="Serach here..." />
  )   
}

export default TodoSearch