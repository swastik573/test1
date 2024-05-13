import React, { useEffect, useState } from 'react'
import './admin.css'

export default function Admin() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => setUsers(data.users));
    },[])
  return (
    <div>
        {users.map((user , id) => <div className='div' key ={id}>{user.firstName}</div>)}
    </div>
  )
}
