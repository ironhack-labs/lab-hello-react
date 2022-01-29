import logo from './logo.svg';
import './App.css';
import InformationCards from './components/InformationCards';
import logoih from './images/ironhack-logo-xs.png';
import bar from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

const title = <h1> Say hello to ReactJs</h1>

function App() {
  const declarative = {
    image: icon1,
    title: "Declarative",
    text: "React makes it painless to create interactive UIs."
  }
  const components = {
    image: icon2,
    title: "Components",
    text: "Build encapsulated components that manage their state."
  }
  const singleway = {
    image: icon3,
    title: "Single-Way",
    text: "A set of immutable values are passed to the component's."
  }
  const jsx = {
    image: icon4,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers."
  }


  return (
    <div className="App">
      <header>
        <div className="img-header">
          <img src={logoih} className='logoih'/>
          <img src="{bar}" className='barmenu'/>
        </div>
          {title}
            <p>You will learn how to use the most popular fronted library, and become a super Ninja developer.</p>
              <button>Awesome!</button>
      </header>
        <section className='cards'>
          <InformationCards {...declarative}/>
          <InformationCards {...components}/>
          <InformationCards {...singleway}/>
          <InformationCards {...jsx}/>
        </section>
    </div>
  );
}

export default App;
