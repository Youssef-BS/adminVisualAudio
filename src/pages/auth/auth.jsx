import React from 'react';
import './auth.css'; 

function Login() {
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
