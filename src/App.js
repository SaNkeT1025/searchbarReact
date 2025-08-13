import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import UseRqeuest from './components/UseRqeuest';
import { useState } from 'react';

// Simple debounce utility
function debounce(func, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}


function App() {
  const recipeApi = "https://dummyjson.com/recipes";
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState();
  const { data, error } = UseRqeuest(recipeApi);

  React.useEffect(() => {
    if (!data) return;
    const debouncedFilter = debounce(() => {
      setFilteredData({
        ...data,
        recipes: data.recipes?.filter(recipe =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        )
      });
    }, 500);
    debouncedFilter();
  }, [search, data]);

  if(error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  function throttle(func, limit) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
const logScroll = throttle(() => {
  console.log("Scrolled:", window.scrollY);
}, 1000);

window.addEventListener("scroll", logScroll);

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <ProductList data={filteredData || data} />
    </div>
  );
}

export default App;
