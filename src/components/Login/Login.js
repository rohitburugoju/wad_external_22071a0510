import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br></br><br></br>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br></br><br></br>
        <button type="submit" >Login</button>
        <button><a href="./components/Main/Main.js">Login</a></button>
      </form>
    </div>
  );
}

export default Login;
