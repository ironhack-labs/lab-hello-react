import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

function DarkDiv(){
    return (
        <div className= 'App-header'>
            <div className= 'menu'>
              <img src={logo} className= 'logo' alt=""/>
            <img src={menu} className= 'menuIcon' alt=""/>  
            </div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn to use
            <br/>the most popular frontend library,
            <br/>and become a super Ninja developer.
            </p>
            <button>Awesome!</button>
        </div>
    )
} 

export default DarkDiv;