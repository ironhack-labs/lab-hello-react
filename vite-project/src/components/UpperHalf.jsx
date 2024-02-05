import '../components/UpperHalf.css';
import IronHack from '../assets/ironhack-logo-xs.png';
import menuTop from '../assets/menu-top-xs.png'

function UpperHalf() {
    return (
    <div className='upperhalf'>
        <nav className='navBar'>
            <img className='ihLogo' src={IronHack} alt="ihLogo" />
            <img className='menuTop' src={menuTop} alt="menuTop" />
        </nav>
        <div className='textBox'>
            <h1>Say hello to<br /> ReactJS </h1>
            <p>you will learn how to use <br/>the most popular frontend library,<br /> and become a Super ninja developer. </p>
        </div>
        <button className='button'>Awesome!</button>
    </div>
    )
}

export default UpperHalf