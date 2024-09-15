// import logo from './logo.svg';
import './App.css';
import Mainscreen from './components/Mainscreen';
import Icontext from './components/Icontext';

import iconone from  './images/icon1.png';
import icontwo from  './images/icon2.png';
import iconthree from  './images/icon3.png';
import iconfour from  './images/icon4.png';


function App() {
  return (
    <div className="App">
      <Mainscreen />

      <div id="container">
        <div><Icontext imageSrc={iconone} title="Declarative" body="React makes in painless to create interactive UIs" /></div>
        <div><Icontext imageSrc={icontwo} title="Components" body="Build encapsulated components that manage their state" /></div>
        <div><Icontext imageSrc={iconthree} title="Single-Way" body="A set of immutable values are passed to the components" /></div>
        <div><Icontext imageSrc={iconfour} title="JSX" body="Statically-typed, designed to run on modern browsers" /></div>
      </div>
    </div>
  );
}

export default App;
