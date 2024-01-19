import './TopContent.css'
import ironhackLogo from '../../assets/ironhack-logo-xs.png'
import menuLogo from '../../assets/menu-top-xs.png'
const heading = 'Say Hello to ReactJS'
const subtitle = 'You will learn how to use the most popular frontend library, and become a super ninja developer.'
const button = 'Awesome!'

const TopContent = () => {
    return (
        <div className="top-content">
            <div className="background"></div>
            <nav>
                <div className="nav-logo"><img src={ironhackLogo} alt="logo" /></div>
                <div className="nav-menu"><img src={menuLogo} alt="menu" /></div>
            </nav>
            <div className='main-text'>
              <h1>{heading}</h1>
              <p>{subtitle}</p>
              <button>{button}</button>
            </div>
        </div>
    );
}

export default TopContent;