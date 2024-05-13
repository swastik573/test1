import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Single() {
   const {id}= useParams();
   const [item,setItem]=useState({});
   useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data => setItem(data));

   },[])
  return (
    <>{item&&<div>{item.title}</div>}
    </>
  )
}
