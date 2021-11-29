// import Declarative from './declarative.png';
// import Components from './components.png';
// import Single from './single.png';
// import jsx from './jsx.png';
import Ironlogo from './public/ironlogo.png';
import Menu from './public/menu.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <img src={Ironlogo} className="logo" alt="logo" />
          <img src={Menu} className="menu" alt="menu" />
        </nav>

        <div>
          <h2>Say hello to ReactJS</h2>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <button type="button">Awesome!</button>
        </div>
      </header>

      {/* <section>
        <div className="row-items">
          <img src={Declarative} alt="Declarative" className="row-pics" />
          <h4>Declarative</h4>
          <p className="row-text">React makes it painless to create interactive UIs.</p>
        </div>

        <div className="row-items">
          <img src={Components} alt="components" className="row-pics" />
          <h4>Components</h4>
          <p className="row-text">Buils encapsulated components that manage their state.</p>
        </div>

        <div className="row-items">
          <img src={Single} alt="single" className="row-pics" />
          <h4>Single-Way</h4>
          <p className="row-text">A set of immutable values are passed to the components.</p>
        </div>

        <div className="row-items">
          <img src={jsx} alt="jsx" className="row-pics" />
          <h4>JSX</h4>
          <p className="row-text">Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section> */}

    </div>
  );
}

export default App;
