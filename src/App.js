import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import UseRqeuest from './components/UseRqeuest';
import { useState } from 'react';

function App() {
  const recipeApi = "https://dummyjson.com/recipes";
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState();
  const { data, error } = UseRqeuest(recipeApi);

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
    return () => clearTimeout(timeoutRef.current);
  }, [search, data]);

  if(error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <ProductList data={filteredData || data} />
    </div>
  );
}

export default App;
