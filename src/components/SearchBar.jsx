import React, { useState, useRef, useCallback } from 'react'





function SearchBar({ search, setSearch }) {
  // Immediate update of input value
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Searchbar</h1>
      <div>
        <input
          value={search}
          onChange={handleChange}
          placeholder="Enter Dish ..."
        />
      </div>
    </div>
  );
}

export default SearchBar