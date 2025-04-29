import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import UseRqeuest from './components/UseRqeuest';
import { useEffect, useState } from 'react';

function App() {

  const recipeApi = "https://dummyjson.com/recipes"

  const [allData, setAllData] = useState()

  const {data, error} = UseRqeuest(recipeApi)

  return (
    <div className="App">
      <SearchBar />
      <ProductList data={data}/>
    </div>
  );
}

export default App;
