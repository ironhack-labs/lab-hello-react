import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import Card from './Card';
import './Section.css';

function Section() {
  return (
    <div>
      <div className='top-section'>
        <nav className='navbar'>
          <img src={logo} alt="Ironhack Logo" />
          <img src={menu} id="menu-icon" alt="Menu icon" />
        </nav>
        <div className="article">
          <h1>Say hello to ReactJS</h1>
          <h4>You will learn how to use the most popular frontend library, and become a super Ninja developer</h4>
          <button>Awesome!</button>
        </div>
      </div>
      <div className='card-section'>
        <Card image={icon1} title="Declarative" description="React makes it painless to create interactive UIs."/>
        <Card image={icon2} title="Componenets" description="Build encapsulated components that manage their state."/>
        <Card image={icon3} title="Single-Way" description="A set of immutable values are passed to the components."/>
        <Card image={icon4} title="JSX" description="Statically-type, designed to run on modern browsers"/>
      </div>
    </div>
      
    
    
  )
}

export default Section;