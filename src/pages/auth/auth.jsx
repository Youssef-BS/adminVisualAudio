import React, { useState } from 'react';
import './auth.css'; 
import { login } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email, password }));
  }

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
}

export default Login;