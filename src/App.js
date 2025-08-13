import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import UseRqeuest from './components/UseRqeuest';
import { useEffect, useState } from 'react';

function App() {
  const recipeApi = "https://dummyjson.com/recipes";
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState();
  const { data, error } = UseRqeuest(recipeApi);

  // Debounce filtering logic
  const timeoutRef = React.useRef();
  React.useEffect(() => {
    if (!data) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilteredData({
        ...data,
        recipes: data.recipes?.filter(recipe =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        )
      });
    }, 500);
    // Cleanup on unmount
    return () => clearTimeout(timeoutRef.current);
  }, [search, data]);

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <ProductList data={filteredData || data} />
    </div>
  );
}

export default App;
