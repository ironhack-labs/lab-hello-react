import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <div id="nav-interface">
          <img src="src/assets/ironhack-logo-xs.png" id="ironhack-logo"/>
          <img src="src/assets/menu-top-xs.png" id="menu-logo"/>
        </div>
      </nav>
      <main>
        <section id="dark-section">
          <div id="hello-react">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular
              frontend library, and become a super Ninja
              developer.
            </p>
          </div>
          <button>Awesome!</button>
        </section>
        <section id="clear-section">
            <ul id="items-ul">
              <li className="container-item">
                <img src="src/assets/icon1.png" className="container-img"/> 
                <h3>Declarative</h3>  
                <p>
                  React makes it painless to create
                  interactive UIs.
                </p>
              </li>
              <li className="container-item">
                <img src="src/assets/icon2.png" className="container-img"/>
                <h3>Components</h3>
                <p>
                  Build encapsulated components that
                  manage their state.
                </p>
              </li>
              <li className="container-item">
                <img src="src/assets/icon3.png" className="container-img"/>
                <h3>Single-Way</h3>
                <p>
                  A set of inmutable values are passed to
                  the components.
                </p>
              </li>
              <li className="container-item">
                <img src="src/assets/icon4.png" className="container-img"/>
                <h3>JSX</h3>
                <p>
                  Statically typed. Designed to run on
                  modern browsers.
                </p>
              </li>
            </ul>
        </section>
      </main>
    </div>
  );
}

export default App
