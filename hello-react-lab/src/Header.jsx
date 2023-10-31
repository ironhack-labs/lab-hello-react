import logo from '/src/assets/ironhack-logo.png';
import menu from '/src/assets/menu.png';
import reactLogo from '/src/assets/react-logo.png';
export default function Header(){
    return(
        <header>
            <nav>
                <img src={logo} id="logo"/>
                <img src={menu} id="menu"/>
            </nav>
            <div id="header-content">
                <h1>Say hello to ReactJS </h1>
                <p>You will learn how to use <br /> the most popular frontend library,<br /> and become a super Ninja developer.</p>
                <div id="awesome-div">Awesome!</div>
            </div>
            <BackgroundDiv />
        </header>
    )
}

function BackgroundDiv(){

    return(
        <div id="header-background">
            <div className="react-container">
                <img src={reactLogo} className="react react-1"/>
                <img src={reactLogo} className="react react-2"/>
                <img src={reactLogo} className="react react-3"/>
                <img src={reactLogo} className="react react-4"/>
                <img src={reactLogo} className="react react-5"/>
                <img src={reactLogo} className="react react-6"/>
            </div>
        </div>
    )
}