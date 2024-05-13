import React, { useEffect, useState } from 'react'

export default function Admin() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => setUsers(data.users));
    },[])
  return (
    <div>hello
        {users.map((user , id) => <div key ={id}>{user.firstName}</div>)}
    </div>
  )
}
