
import "./App.css";

function App() {
  return (
    <>
      <section className="section">
        <navbar className="nav">
          <img
            src="images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69726f6e6861636b2d6c6f676f2d78732d6461726b2e706e67.png"
            alt="fondo"
            className="App-logo"
          ></img>
          <img src="images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f6d656e752d746f702d78732d6461726b2e706e67.png" alt="menu"></img>
        </navbar>
        <div className="App-header">
          <h1>
            Say hello to <br /> ReactJS
          </h1>

          <p>
            You wil learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>

          <button className="button">Awesome!</button>
        </div>
      </section>
      <div className="cards">
        <div>
          <img src="images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e342e706e67.png" alt="card1"></img>
          <h3>Declarative</h3>
          <p>
            React makes it <br></br> painless to create <br></br> interactive
            UIs.
          </p>
        </div>

        <div>
          <img src="images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e332e706e67.png" alt="card2"></img>
          <h3>Components</h3>
          <p>
            Build encapuslated <br></br> components that <br></br> manage their
            state.
          </p>
        </div>

        <div>
          <img src="images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706e67.png" alt="card3"></img>
          <h3>Single-Way</h3>
          <p>
            A set of immutable <br></br> valuse ara passed to <br></br> the
            component's.
          </p>
        </div>

        <div>
          <img src="images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706e67.png" alt="card4"></img>
          <h3>JSX</h3>
          <p>
            Statically-typed <br></br> designed to run on <br></br> modern
            browsers.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
