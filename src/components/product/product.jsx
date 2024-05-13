import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Product() {
    const location =useLocation();
    const categoryName = new URLSearchParams(location.search).get('category');
    const [products, setProducts]= useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${categoryName}?limit=2&skip=${currentPage*2}`)
.then(res => res.json())
.then(data => setProducts(data.products));
    }
,[currentPage])
    const handlePrev = () => {
      setCurrentPage(currentPage-1);
  }
  const handleNext = () => {
      setCurrentPage(currentPage+1);
  }
  return (
    <>
    <ul>
        {products.map((category) => {
            return <li ><Link to={`/products/${category.id}`}>{category.title}</Link></li>
        })}
      </ul>
      <button onClick={handlePrev} disabled={currentPage===0}>prev</button>
      <button onClick={handleNext}>next</button>
      </>
  )
}
