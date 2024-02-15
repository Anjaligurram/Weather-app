/*function Login(){
    let isLogin=true
    return(
        <>
           {
            isLogin?<First />:<Second />
           }
        </>
              
    )
}
export default Login
export function First(){
    return(
    <>
     <h1>Login Successful</h1>
    </>
    )
}
export function Second(){
    return(
    <>
     <h1>Log out</h1>
    </>
    )
}
// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Signup} from './Signup';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication logic here (e.g., check credentials)
    // For simplicity, let's assume successful login
    // Redirect to the weather app page upon successful login
    navigate.push('/navbar');
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account?<Link to="/Signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email, password})
    .then(result =>{ console.log(result)
      if(result.data === "Success") {
        navigate('/navbar')
      }
      
    })
    .catch(err=> console.log(err))
  }
    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input type="password" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Login
            </button>
            </form>
            <p>Don't Have an Account</p>
            <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
              Signup
            </Link>
          
        </div>
      </div>
    )
  };

export default Login;
