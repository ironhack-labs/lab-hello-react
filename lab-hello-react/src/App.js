import logo from './logo.svg';
import './App.css';
import ReactCards from './components/ReactCards';
import menu from './images/menu-top-xs.png';
import logoIH from './images/ironhack-logo-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

const title = <h1>Say Hello to ReactJS</h1>




function App() {
  const card1 = {
    image: icon1,
    title: "Declarative",
    text: "React makes in painless to create interactive UI"
  }
  const card2 = {
    image: icon2,
    title: "Components",
    text: "Build encapsulated components that manage their state."
  }
  const card3 = {
    image: icon3,
    title: "Single-Way",
    text: "A set of immutable values are passed to the component's"
  }
  const card4 = {
    image: icon4,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers."
  }
  return (
    <div className="App">
          <header className='header'> 
          <div className='image-header'>
          <img src={logoIH} className='logo' />
          <img src={menu} className='menu'/>
          </div>
          {title}
          <p>You will learn how to use the most popular frontend-library, and become a super Ninja Developer</p>
          <button className='button'>Awesome!</button>
          </header>
          <main className='Cards-main'>
          <ReactCards {...card1}/>
          <ReactCards {...card2}/>
          <ReactCards {...card3}/>
          <ReactCards {...card4}/>
          </main>
    
    </div>
  );
}

export default App;
