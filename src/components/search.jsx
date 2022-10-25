import React from 'react'

const Search = ({term, searchKeyword}) => {

function handleSearch(e){
    searchKeyword(e.target.value)
}

  return (
    <div>
        <input type="text"  placeholder='Enter a book name' onChange={handleSearch} className='input-field' value={term}/>
        
    </div>
  )
}

export default Search