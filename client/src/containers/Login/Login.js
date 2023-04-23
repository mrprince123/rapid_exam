import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Login = () => {
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  

  const handleLogin =async () => {
     await axios.post("http://localhost:5000/login", {
      
      Email : Email,
      Password : Password,
     
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(`login falied : ${err}`);
      })
     
  }



  return (
    <div className='register_father '>
      <div className='register_div'>
        <div className='register_image'>
          <img src='https://i.pinimg.com/736x/01/da/56/01da56fea9688d47cd7b1258cb89c768.jpg' alt='working person' />
        </div>
        <div className='register_form '>
          <h1>Get's Staarted.</h1>
          <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br />
          <input type='text' onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br />
          <button onClick={handleLogin}>Login</button>
          <p className='login_form_or'> or </p>
          <button>Sign Up With Gooogle</button>
          <p className='login_form_or'>Don't Have an account ?<span><NavLink  to="/register">Register</NavLink></span></p>

        </div>
      </div>
    </div>
  )}

export default Login