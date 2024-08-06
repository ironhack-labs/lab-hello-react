import ironLogo from '../../assets/ironhack-logo-xs.png'
import burgerIcon from '../../assets/menu-top-xs.png'
import Button from '../button/button.jsx'
import './nav.css'

function Nav() {
    return (
        <nav>
            <div className='nav-icons'>
                <div>
                    <img src={ironLogo} alt="iron background"  className='nav-img'/>
                </div>
                <div>   
                    <img src={burgerIcon} alt="iron background" className='nav-img'/>
                </div>
            </div>
            <div className='content'>
                <h1 className='content-h1'>Say hello to ReactJS</h1>
                <div className='content-p'>
                    <p>You will learn to use <br/>the most popular frontend library, and become a super developer</p>
                </div>
                <div>
                    <Button/>
                </div>
            </div>
        </nav>
    );
}

export default Nav