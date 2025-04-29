import React, { useState } from 'react'

function SearchBar() {
  const [serach,setSearch] = useState('');

  const debounce = (fnc,timer) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      
      setTimeout(()=>{
        fnc.apply(this,args);
      },timer)
    }
  }

  

  return (
    <div>
        <h1>Searchbar</h1>
      <div>
        <input onChange={(e)=>{setSearch(e.target.value)}} placeholder='Enter Dish ...'/>
      </div>
    </div>
  )
}

export default SearchBar