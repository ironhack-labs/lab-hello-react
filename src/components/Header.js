import Icon from "../images/ironhack-logo-xs.png"
import MenuTop from "../images/menu-top-xs.png"

const Header = ()=>{
    return(
        <div className="blue">
            <div className="top">
                <img src = {Icon}/>
                <img src = {MenuTop}/>
            </div>
            <div>
                <h1> Say hello to <br/> 
                ReactJS<br/>
                </h1>
                <p>You will learn how to use <br/> 
                the most popular frontend library, <br/>
                and become a super ninja developer.
                </p>
            </div>
            <div>
            <button>Awesome!</button>
            </div>
        </div>
    )
}

export default Header