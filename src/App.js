
import { useState } from 'react';
import './App.css';
import { Home } from './components/Home.jsx/home';
import Login from './components/login/login';
import Admin from './admin/admin';

function App() {
  const [auth ,setAuth] = useState('auth');
  return (
    <>
    {(auth==='auth')&&<Login setAuth={setAuth}/>}
    {(auth==='swastik')&&<Home/>}
    {(auth==='admin')&&<Admin/>}


    </>
  );
}

export default App;
