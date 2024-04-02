import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Hero.css'

function Hero() {
  return (
    <div className='Hero'>
            <Navbar
            logo='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png'
            hamMenu='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png'
            >
            </Navbar>

            <h1 className='hero-h1'>Say hello to ReactJS</h1>
            <p className='hero-p'>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <button className='hero-btn'>Awesome!</button>

    </div>
  )
}

export default Hero