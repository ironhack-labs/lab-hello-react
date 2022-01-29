import './App.css';
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import declarativeImg from './images/icon1.png'


const MyComponent =
    <div>
      <div>
        <img src={logo} alt="ironhack-logo"/>
        <img src={menu} alt="menu-top"/>
      </div>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular front end library, and become a super Ninja developer.</p>
      <button>Awsome!</button>
    </div>
;

const Card = 
  <div>
    <img src={declarativeImg} alt=""/>
    <h3>Declarative</h3>
    <p>React makes it painless to create interactive UIs</p>
  </div>
;

function MultipleCards(props){
  return (
    <div>
      <img src={props.image} alt=""/>
      <h3>{props.header}</h3>
      <p>{props.paragraph}</p>
    </div>
  )
}

const declarative = {
  image: {declarativeImg },
  header: 'Declarative',
  paragraph: 'React makes it painless to create interactive UIs'
}
;

function App() {
  return (
    <div className="App">
      {MyComponent}
      {Card}
      <MultipleCards 
        image = {declarative.image}/>
    </div>
  );
}

export default App;
