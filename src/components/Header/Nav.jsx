import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from './../../assets/Hamburger.svg';
import './Nav.css';


const Nav = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className='navbar'>
        <div className="container-nav">
            <div className="logo">
              <h1 className='title'>
                {/* <NavLink to='/' className='NavLink title'>Welcome!</NavLink> */}
                </h1>
            </div>

            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>

            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/about">About</NavLink></li> */}
                <li><NavLink to="/blog">Blog</NavLink></li>
              </ul>
              
            </div>
          </div>
    </nav>
  )
}

export default Nav;