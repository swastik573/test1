import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    console.log(categories);
  }, []);
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if(query!==""){fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setMatchingProducts(data.products));}
      else{
          setMatchingProducts([]);
      }
  }, [query]);
  

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search..."
      />
      {matchingProducts &&
        matchingProducts.map((product) => {
          return (
            <div>
              <Link to={`/products/${product.id}`} key={product.id}>
                {product.title}
              </Link>
            </div>
          );
        })}
      {query===""&&<ul>
        {categories.map((category,id) => {
          return (
            <li key={id}>
              <Link to={`/categories?category=${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>}
      
    </>
  );
};
