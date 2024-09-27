import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'

const Header =() => {
    return(
<div className='Header'>
    <div className='Nav'>
        <img src= {logo} alt="ironhackLogo"/>
        <img src= {menu} alt="menuIcon"/>
    </div>

    <div className='Hello'>
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>

        <p>You will learn how to use
        the most popular frontend library,
        and become a super Ninja developr
        </p>

        <button>Awesome!</button>
    </div>
</div>
    )}

export default Header;