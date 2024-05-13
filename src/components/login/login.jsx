import React, { useState } from 'react'


export default function Login({setAuth}) {

     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     
     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(username, password);
         if(username==='admin'&&password==='admin')
           {
            setAuth('admin');

           }else if(username==='swastik'&&password==='password'){
            setAuth('swastik');
           }
         else{
             alert('invalid username or password');
             setUsername('');
             setPassword('');
         }
     }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" value={username} id='username' onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">password</label>
        <input type="password" value={password} id='password'  onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>login</button>
    </form>
  )
}
