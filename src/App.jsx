
import './App.css'

function App() {
  return (
    <>
      <div className="card">
        <div className="component1">
          <h1 className="Carlos">Say hello to React</h1>
          <p className="Intro">Aqui aprenderas como se usa React para crear aplicaciones SPA</p>
          <button className="button" href="">Awesome!</button>
        </div>

          <div className="Parrafo">
                <div className="card">
                  <img className="Parrafo" src="/src/assets/icon1.png" />
                  <h3 className="Parrafo">Declarative</h3>
                  <p className="texto">React makes it painless to create interactive Uis</p>
                </div>

                <div className="card">
                  <img className="Parrafo" src="/src/assets/icon2.png" />
                  <h3 className="Parrafo">Components</h3>
                  <p className="texto">Buid encapsulated components that manage their state</p>
                </div>

                <div className="card">
                  <img className="Parrafo" src="/src/assets/icon3.png" />
                  <h3 className="Parrafo">Single-Way</h3>
                  <p className="texto">A set of immutable values are passed to the components</p>
                </div>

                <div className="card">
                  <img className="Parrafo" src="/src/assets/icon4.png" />
                  <h3 className="Parrafo">JSX</h3>
                  <p className="texto">Strctacly typed deigned to run on modern browsers</p>
                </div>
          </div>
      </div>  
    </>
  );
}

export default App;
