import React, { useState,useContext } from 'react'
import { AuthContext } from '../components/AuthProvider';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {state, isAuthenticated ,login,logout} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({username, password});
    }
    console.log(state.user.username)
    console.log(isAuthenticated)
  return (
    <div>
        {
            state.isAuthenticated ? 
            <div>
                <h1>Hello, {state.user.username}</h1>
                <p>You Are Logged In.</p>
                <button onClick={logout}>Logout</button>
            </div>
            :
            <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <label>Password</label>
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            </div>
        }
    </div>
  )
}
