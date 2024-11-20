import React from 'react'
import './Navbar.css'

const Navbar = ({ nav }) => {
  return (
    <header className="Navbar">
      <nav>
        <ul>
          <li>
            <img src={nav[0].image} alt={nav[0].name} />
          </li>
          <li>
            <img src={nav[1].image} alt={nav[1].name} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
