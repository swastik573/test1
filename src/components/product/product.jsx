import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './product.css'

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
    <ul className='hello'>
        {products.map((category) => {
            return <li className='product-card' ><Link to={`/products/${category.id}`}><div style={{border:'1px solid black',backgroundColor:'lightblue'}}>{category.title} </div>  <div style={{color:'black' , height :'180px'}}> about : {category.description}</div>   <div style={{color:'red' , backgroundColor:"lightyellow"}}>price : {category.price}</div> </Link></li>
        })}
      </ul>
      <div style={{marginLeft:'auto'}}>
      <button onClick={handlePrev} disabled={currentPage===0}>prev</button>
      <button onClick={handleNext} disabled={products.length===0}>next</button>
      </div>
      </>
  )
}
