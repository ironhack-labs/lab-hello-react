import './App.css';



function App() {
  return (

    <div className="App">

    <nav>
      <img src="./src/assets/ironhack-logo-xs.png" alt="logo" />
      <img src="./src/assets/menu-top-xs.png" alt="menu" />
    </nav>

    <div className ="header">
      <div>
    <h1>Say hello to <br />
     ReactJS</h1>

    <p>You will learn how to use
      <br />the most popular frontend library,<br />t
          and become a super Ninja developer
    </p>
    <button>Awesome!</button>
      </div>
    </div>
     <div className="icons">
        <div>
           <img src="./src/assets/icon1.png" alt="icon1" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interective UIs</p>
        </div>
        <div>
            <img src="./src/assets/icon2.png" alt="icon2" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
           <img src="./src/assets/icon3.png" alt="icon3" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to component's.</p>
        </div>
        <div>
            <img src="./src/assets/icon4.png" alt="icon4" />
            <h3>JSX</h3>
            <p>Statically-typed. designed to run on modern browsers</p>
      </div>
    </div>
 </div>
  );
}

export default App;