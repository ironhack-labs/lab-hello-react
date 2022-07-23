/* import logo from './logo.svg'; */
import './App.css';

import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Button from "./components/Button";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const t1 = <h1>Declarative</h1>;
const 
function App() {
  return (
    <div className="App">
    <div className='top'>
    <Navbar />
    <section className='main'>
    <Headline />
    <Button className='btn' />
    </section>
    </div>
    
    <section class="points">
    <div>
        <img
          src={icon1}
          text=""
          text2=""
        />
        {t1}

        </div>
        <p>React makes it painless to create interactive UIs.</p>
        <Article
          src={icon2}
          text="Components"
          text2="Build encapsulated components that manage their state"
        />
        <Article
          src={icon3}
          text="Single-Way"
          text2="A set of immutable values are passed to the component's"
        />
        <Article
          src={icon4}
          text="JSX"
          text2="Statically-typed designed to run on modern browsers"
        />
      </section>
   
   
      
    
    <br /> <br /> <br />
  

    </div>
  );
}

export default App;
