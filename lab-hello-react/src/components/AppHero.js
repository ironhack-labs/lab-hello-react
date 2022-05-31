import ironhackLogo from './../images/ironhack-logo-xs.png'
import menuIcon from './../images/menu-top-xs.png'

const AppHero = () => {


    return (
        <div className="App-hero">
            <nav>
                <img src={ironhackLogo} alt="" className="logo"></img>
                <img src={menuIcon} alt="" className="logo"></img>
            </nav>
            <h1>Say hello to ReactJS</h1>
            <p>You will kearn how to use the most popular frontend library and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
    )
}

export default AppHero