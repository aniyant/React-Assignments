import React, {useContext,useState } from 'react';
import { AuthContext } from '../components/AuthContextProvider';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login,isAuthenticated,logout } = useContext(AuthContext) ;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
    {
        isAuthenticated ?
        <div>
        <h2>You are already logged in.</h2>
        <button onClick={handleLogout}>Logout</button>
        </div>
        :
        <div>
      <h2>Login</h2>
      <p>Type: 'admin' for username and 'admin' for password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
        </div>
    }
    
    </>
    
  );
};
