import React, { useEffect } from 'react'
import '../css/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading, searchParams, setSearchParams }) {  
  const onSearchValueChange = (event) => {
    const value =  event.target.value    
    setSearchValue(value);
    setSearchParams({ search: value })
  }

  useEffect(() => {
    const search = searchParams.get('search')
    if (!!search) {
      setSearchValue(search);
    }
  }, [searchParams, setSearchValue])

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