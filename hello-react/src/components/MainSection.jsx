import './MainSection.css';
import iconIronHack from '../images/ironhack-logo-xs.png' 
import topIcon from '../images/menu-top-xs.png' 

function MainSection() {
  return (
    <div className="main-page">
        <div className="icons-flex">
        <img className="icon-ironchack" src={iconIronHack} alt="" />
        <img className="icons" src={topIcon} alt="" />
        </div>
        <div className="main-page__text">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular
            frontend library and become a super Ninja developer</p>
            <button className="button">Awesome!</button>
        </div>
        
    </div>
  )
}

export default MainSection