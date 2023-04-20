import React from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { axios } from './../../../node_modules/axios/dist/esm/axios';



const Register = () => {



  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    axios.post("http://locallhost:5000/register", {
      Username,
      Email,
      Password,
      ConfirmPassword
    })
    .then(()=>{
      console.log("login successfully");
    })
    .catch((err)=>{
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
          <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='User Name' /><br />
          <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br />
          <input type='text' onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br />
          <input type='text' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' /><br />
          <button onClick={handleLogin}>Register</button>
          <p>or </p>
          <button onClick={google_Click}>Sign Up With Gooogle</button>
          <p>Already Have an account ?<span><NavLink>Login</NavLink></span></p>

        </div>
      </div>
    </div>
  )
}

export default Register