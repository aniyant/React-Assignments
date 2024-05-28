import React from 'react'
import { useContext,useState } from 'react';
import { AuthContext } from '../components/AuthContextProvider';
import axios from 'axios';


export const Login = () => {
  const [isloggedIn,setLoggedIn,token,setToken] = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    let response = await axios.post('https://reqres.in/api/login',{
      email,
      password
    });
    console.log(response);
    if(response.data.token){
      localStorage.setItem('token',response.data.token);
      setLoggedIn(true);
      setToken(response.data.token);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setToken(null);
  }

  return (
    <div>
      {isloggedIn ? <h2>you are logged in</h2>:<h2>Please Login</h2>}
      { 
      isloggedIn ?
       <button onClick={handleLogout}>LogOut</button> 
       : 
      <form onSubmit={handleLogin}>
        <input type='text' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' required />
        <br/>
        <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required />
        <br/>
        <button type='submit'>Login</button>
      </form>
    }
    </div>
  )
}
