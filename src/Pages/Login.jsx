import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext';
function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState("");

    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email.trim() || !password.trim()){
            setError("Please enter your email and password");
            return;
        }
        login(email);
        navigate("/");
    }
  return (
    <div className='login-page'>
      <div className='login-card'>
       <Link to="/" className='login-logo'>GLOWCART</Link>
        <p className='login-tagline'>YOUR SKINCARE JOURNEY STARTS HERE</p>
        <h1>WELCOME BACK!!</h1>
        <p className='login-description'>Sign in to continue your beauty journey.</p>

        <form onSubmit={handleSubmit}>
         <label htmlFor='email'>Email Address</label> 
          <input id='email' type='email' placeholder='Enter your email' value={email} onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }} />
              
         <label htmlFor='password'>Password</label> 
          <input id='password' type='password' placeholder='Enter your password' value={password} onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }} />
          
          {error && <p className='login-error'>{error}</p>}
          <button type='submit' className='login-submit'>Sign In</button>
        </form>

        <p className='login-footer'>New to GlowCart?{" "}
        <Link to="/login">Welcome!</Link>
        </p>

        <Link to="/" className='back-home'>Back to Home</Link>
      </div>
    </div>
  )
}
export default Login;
