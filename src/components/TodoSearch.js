import React from 'react'
import '../css/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading })
{
  const onSearchValueChange = (event) =>
  {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className='inputsearch'
      value={searchValue}
      onChange={onSearchValueChange}
      placeholder="Serach here..."
      disabled={loading}
    />
  )
}

export default TodoSearch