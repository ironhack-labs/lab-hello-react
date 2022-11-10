import React from 'react'
import logo from '../images/ironhack-logo-xs.png'; 
import hamburger from '../images/menu-top-xs.png'
import './Navbar.css';

export default function Navbar() {

  return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
              <div>
                <a to="/" className="navbar-logo">
                  <img src={logo} />
                </a>
              </div> 
              <div className='menu-icon'>
                <img src={hamburger} />
              </div>
          </div>
        </nav>
      </>
  )
}
