import'../App.css'
import logo from'../images/ironhack-logo-xs.png'
import menu from'../images/menu-top-xs.png'

import logo1 from'../images/icon1.png'
import logo2 from'../images/icon2.png'
import logo3 from'../images/icon3.png'
import logo4 from'../images/icon4.png'
import reactLogo from'../images/logo192.png'

function Navbar (){
    return <div className="App">
    <div className="top">
    <div className="nav">
        <img src={logo} alt="logo"/>
        <img className="menu" src={menu} alt="menu"/>
    </div>
    <div className="middle">

    
    <div className="sayHello">

    
    <h1> Say hello to ReactJS</h1>
    <h3>You will learn how to use the most popular frontend library, 
    and become a super ninja developer.</h3>
    <button className='button'> Awesome!</button>
    </div>
    <div className="react">
    <img src={reactLogo} alt="reactLogo"/>
    <img src={reactLogo} alt="reactLogo"/>
    <img src={reactLogo} alt="reactLogo"/>
    
    </div>


    </div>
    </div>

    <div className="bottom">
    <div className="bottom1">
    <img src={logo1} alt="logo1"/>
    <h1>Declarative</h1>
    <h3>
    React makes it painless to create interactive UIs.
    </h3>

    </div>
    <div className="bottom2">
    <img src={logo2} alt="logo2"/>
    <h1>Components</h1>
    <h3>
    Build encapsulated components that manage their state.
    </h3>

    </div>
    <div className="bottom3">
    <img src={logo3} alt="logo3"/>
    <h1>Single-Way</h1>
    <h3>
    A set of immutable values are passed to the components´s.
    </h3>

    </div>
    <div className="bottom4">
    <img src={logo4} alt="logo4"/>
    <h1>JSX</h1>
    <h3>
    Statically-typed, designed to run on modern browsers.
    </h3>

    </div>



    </div>


    </div>
}

export default Navbar;