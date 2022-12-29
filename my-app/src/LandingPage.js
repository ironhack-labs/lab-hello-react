import React from 'react'
import './LandingPage.css'
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuTop from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

const LandingPage = () => {
    return (
        <div>
            <div className='background'>
                <section className='nav-bar'>
                    <img className='logo' src={ironhackLogo} alt="ironhack-logo"/>
                    <img className='menu-top' src={menuTop} alt="menu-top"/>
                </section>
                <section className='title'>
                    <h1 className='h1'>Say hello to ReactJS</h1>
                    <p className='para'>You will learn how to use <br/>the most popular frontend library, <br/>and become a super Ninja developer.</p>
                    <button className='button'>Awesome!</button>
                </section>
            </div>
            <div className='secondDiv'>
                <section>
                    <img className='img' src={icon1} alt="icon1"/>
                    <h3 className='h3'>Declarative</h3>
                    <p className='paras'>React makes it painless to create interactive UIs.</p>
                </section>
                <section>
                    <img className='img' src={icon2} alt="icon2"/>
                    <h3 className='h3'>Components</h3>
                    <p className='paras'>Build encapsulated components that manage their state.</p>
                </section>
                <section>
                    <img className='img' src={icon3} alt="icon3"/>
                    <h3 className='h3'>Single-Way</h3>
                    <p className='paras'>A set of immutable values are passed to the component's.</p>
                </section>
                <section>
                    <img className='img' src={icon4} alt="icon4"/>
                    <h3 className='h3'>JSX</h3>
                    <p className='paras'>Statically-typed, designed to run on modern browsers</p>
                </section>
            </div>
        </div>
    )
}

export default LandingPage