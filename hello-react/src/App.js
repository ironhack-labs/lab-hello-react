import './App.css';
import logo from './images/ironhack-logo-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import { MdMenu } from 'react-icons/md';


function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="logo" className="App-logo"/>
        <span className="menu"><MdMenu/></span>
      </nav>
      <section className="App-header">
        <h1>Say Hello to React JS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat quam in purus convallis fringilla. Vivamus tincidunt id augue a rhoncus. Integer at orci placerat, rutrum elit viverra, eleifend est. Aliquam vitae finibus sem. Etiam sit amet tristique purus. In condimentum ex maximus orci dictum, non molestie tortor consectetur.</p>
        <button>Click me!</button>
      </section>
      <section className="details">
        <div className="card">
          <img src={icon1} alt="icon" />
          <h2>Title</h2>
          <p>Maecenas eu dolor sit amet odio tristique dictum. Donec ut varius dolor.</p>
        </div>
        <div className="card">
          <img src={icon2} alt="icon" />
          <h2>Title</h2>
          <p>Maecenas eu dolor sit amet odio tristique dictum. Donec ut varius dolor.</p>
        </div>
        <div className="card">
          <img src={icon3} alt="icon" />
          <h2>Title</h2>
          <p>Maecenas eu dolor sit amet odio tristique dictum. Donec ut varius dolor.</p>
        </div>
        <div className="card">
          <img src={icon4} alt="icon" />
          <h2>Title</h2>
          <p>Maecenas eu dolor sit amet odio tristique dictum. Donec ut varius dolor.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
