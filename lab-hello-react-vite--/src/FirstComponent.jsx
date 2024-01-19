import './App.css'
import logo from "./images/ironhack-logo-xs.png"
import image1 from "./images/icon-1-removebg-preview.png"


function FirstComponent () {

    return(
        <div id="intro">
            <div id="nav-bar">
                <img className="logo" src={logo} alt="" />
                <img id="menu-icon" src={image1} alt="" />
            </div>

            <h1>Say hello to ReactJS </h1>
            <p id="text">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
    )
}

export default FirstComponent