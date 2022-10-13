import React from 'react'
import { TodoContext } from './TodoContext';
import '../css/TodoSearch.css'

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
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