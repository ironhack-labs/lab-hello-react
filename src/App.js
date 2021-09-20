// src/App.js
import './App.css';
import Navbar from './components/Navbar.js'
import Cards from './components/Cards.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="cards-section">
        <Cards img="images/icon1.png" title="Declarative" text="React makes it painless to crete interactive UIs."/>
        <Cards img="images/icon2.png" title="Components" text="Build encapsulated components that manage their state."/>
        <Cards img="images/icon3.png" title="Single-Way" text="A set of immutable values are passed to component's."/>
        <Cards img="images/icon4.png" title="JSX" text="Statically-tuped, designed to run on modern browsers."/>
      </div>
    </div>
  );
}
export default App;
