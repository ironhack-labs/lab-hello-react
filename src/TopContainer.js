import logo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';

function TopContainer(){
    return (
        <div className="header">
            <div className="nav-bar">
                <img src={logo} className="logo" alt=""/>
                <img src={menuTop} className="menuTop" alt=""/>
            </div>
            <div className="content">
                <h1 class="title"> Say hello to React</h1>
                    <p class="description">You will learn how to use 
                        <br /> the most popular frontend library,
                        <br /> and become a super Ninja developer 
                    </p>
                <button>Awesome</button>
            </div>
        </div>
);
}
export default TopContainer;