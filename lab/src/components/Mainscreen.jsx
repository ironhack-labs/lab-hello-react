import IronhackLogo from '../images/ironhack-logo-xs.png';
import menutop from  '../images/menu-top-xs.png';


function Mainscreen () {

    return(
        <div className="screen">
            <div className="top-icons">
                <div className="left-icon">
                    <img src={IronhackLogo} alt = "any"></img>
                </div>
                <div className="right-icon">
                    <img src={menutop} alt = "any"></img>
                </div>
            </div>

            <hello>Say hello to ReactJS</hello>
            <info>You will learn how to use the most popular frontend library, and become a super Ninja developer.</info>
            <button class="awesome">Awesome!</button>
        </div>
    )
}

export default Mainscreen