import React from 'react'
import IronhackLogo from "../assets/ironhack-logo-xs.png"
import MenuImg from "../assets/menu-top-xs.png"

const Header = () => {
  return (
    <div className='Header'>
        <div className='Images'>
            <img id="ironhack-logo" src={IronhackLogo} alt="ironhack-logo"/>
            <img id="dropdown-logo" src={MenuImg} alt="dropdown-logo"/>
        </div>
        <div className='Text'>
            <h1>Say hello to <br/>
            ReactJS</h1>
            <p>You will learn how to use <br/>
            the most popular frontend libraray, <br/>
            and become a super Ninja developer.
            </p> <br/>

            <button id="button1" >Awesome!</button>
        </div>



    </div>
  )
}

export default Header