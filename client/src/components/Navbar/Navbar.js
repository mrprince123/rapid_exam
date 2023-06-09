import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/myLogo.png'
import './navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rapid__navbar">

      <div className="rapid__navbar-links">
        <div className="rapid__navbar-links_logo">
          <img src={logo} alt='this is the logo' />
        </div>
        <div className="rapid__navbar-links_container">
          <p><a href="/">Home</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/courses">Courses</a></p>
          <p><a href="/contact">contact</a></p>
        </div>
        <div className="rapid__navbar-sign">
          <NavLink to="/login"><p>Login</p></NavLink>
          <NavLink to="/register"><button type="button">Register</button></NavLink>
        </div>
      </div>



      {/* This is for the Toggle View */}
      <div className="rapid__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="rapid__navbar-menu_container scale-up-center">
            <div className="rapid__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#courses">Courses</a></p>
              <p><a href="#contact">Contact</a></p>

            </div>
            <div className="rapid__navbar-menu_container-links-sign">
              <NavLink to="/login"><p>Login</p></NavLink>
              <button type="button">Register</button>
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default Navbar;
