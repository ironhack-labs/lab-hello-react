// src/App.js
import './App.css';
import MainSection from './components/MainSection';
import CardsContainer from './components/CardsContainer';
import Cards from './components/Cards';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png'; 
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <MainSection/>
      <CardsContainer>
        <Cards image={icon1} title="Declarative" description="React makes it painless to create interactive UIs."/>
        <Cards image={icon2} title="Componenets" description="Build encapsulated components that manage their state."/>
        <Cards image={icon3} title="Single-Way" description="A set of immutable values are passed to the components."/>
        <Cards image={icon4} title="JSX" description="Statically-type, designed to run on modern browsers"/>
      </CardsContainer>
    </div>
  );
}

export default App;
