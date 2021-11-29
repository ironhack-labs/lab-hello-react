import './App.css';

// images
import logo from './images/logo.png';
import menu from './images/menu.png';
import bullet1 from './images/bullet1.png';
import bullet2 from './images/bullet2.png';
import bullet3 from './images/bullet3.png';
import bullet4 from './images/bullet4.png';


function NavBar(props) {
  return (
      <nav className="nav-bar">
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu"/>
      </nav>)
}

function Hero() {
  return (
    <div className="hero">
      <div className="elements">
        <h1> Say Hello to ReactJS</h1>
        <p className='subtitle'>
          You will learn how to use the most popular frontend library,
          and become a Super Ninja developer.
        </p>
        <Button buttonText="Awesome!"/>
      </div>
    </div>
    )
}

function Bullet(props) {
    return (
      <div className='bullet'>
          <img src={props.img} alt="bullet pic" />
          <p className="bullet-title">{props.title}</p>
          <p className="bullet-description">{props.description}</p>
        </div>
    )
}

function BulletsList() {
  return (
      <div className="bullets">
        <Bullet img={bullet1} title="Declarative" description="React makes it painless to create interactive UIs."/>
        <Bullet img={bullet2} title="Components" description="Build encapsulated components that manage their state."/>
        <Bullet img={bullet3} title="Single-Way" description="A set of immutable values are passed to the component's."/>
        <Bullet img={bullet4} title="JSX" description="Statically-typed designed to run on modern browsers."/>
      </div>
      )
}

function Button(props){
  return (
    <div className='button'>
      {props.buttonText}
    </div>
  )
}

function App() {
  return (
    <div>
          <NavBar />
          <Hero />
          <BulletsList />
      </div>
  );
}

export default App;
