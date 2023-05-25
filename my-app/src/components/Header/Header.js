import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return ( 
    <section className="head-container">
        <nav className="navbar">
            <img src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
            <img src="/images/menu-top.svg" alt="ironhack-menu"/>
        </nav>
        <div className="hello-container">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </div>             
    </section>
    )
  }
}

export default Header;