import logo from './images/ironhack-logo-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import menuLogo from './images/menu-top-xs.png';
import './App.css';

function App() {

  function Card (props) {
    return (<div>
      <img src={props.image}/>
      <div className='cardTitle'><p>{props.main}</p></div>
      <div className='cardText'><p>{props.text}</p></div>
    </div>);
  }

  return (
    <header className='header'>
    <nav>
      <div className='nav'>
        <img src={logo} className="" alt="logo" />
        <img src={menuLogo} className="" alt="logo" />
      </div>
      <div className='bodyHeader'>
        <div className='headerText'>
          <span className='title'>Say Hello to <br></br>ReactJS.<br></br></span>
          <span className='text'>You will learn how to use <br></br> the most popular front end library,<br></br> and become a super Ninja developer</span>
        </div>
          <button className='button'>Awesome!</button>
      </div>
    </nav>
    <body>
      <div className='cardsIcons'>
        <Card image={icon1} main='Declarative' text='React makes it painless to create interactive UIs' />
        <Card image={icon2} main='Components' text='Build encapsuled components that manage their state' />
        <Card image={icon3} main='Single-Way' text="A set of inmmutable values are passed to the component's" />
        <Card image={icon4} main='JSX' text='Statically-typed, designed to run on modern browsers' />
      </div>
    </body>
    </header>
  );
}

export default App;
