import logo from '../logo.svg';
import ironHackLogo from "../images/ironhack.png";
import rayas from "../images/rayas.png";
import "../App.css";
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

const Header = (props) => {
        
    return (
        <div className='header'>
            <div className="main">
                <div className='firstMain'>
                   <img src={ironHackLogo} alt="logo"></img>
                   <img src={rayas} alt="menu"></img> 
                </div>
                <div className='secondMain'>
                <h1>Say hello to ReactJS</h1>
                
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                </div>
                <div className='thirdMain'>
                <h3>Awesome!</h3>
                </div>
            </div>
            </div>
            
       

)}
    
    export default Header;
    
    