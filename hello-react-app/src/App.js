import './App.css';
import foto1 from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706e67.png';
import foto2 from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e332e706e67.png';
import foto3 from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e342e706e67.png';
import foto4 from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69726f6e6861636b2d6c6f676f2d78732d6461726b2e706e67.png';
import foto5 from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f6d656e752d746f702d78732d6461726b2e706e67.png';
import foto6 from './images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706e67'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Header-head'>
          <img src={foto4} className="App-logo" alt="logo" />
          <img src={foto5} className="App-logo" alt="logo" />
        </div>
        <div className='Header-container'>
          <h2 className='Header-title'>Say hello to Reactjs</h2>
          <div className='Header-text'>
            <h6>You will learn how to use the most popular fronted library, and become a super Ninja developer</h6>
          </div>
          <button className='Header-button'>Awesome!</button>
        </div>
      </header>
      <div className='container-img'>
        <div className='App-container-card'>
          <div className='card'>
            <div className='App-img'>
              <img src={foto1} alt="logo" className="card-img-top" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Declarative</h5>
              <p className="card-text">react makes it painless to create interactive UIs.</p>
            </div>
          </div>
        </div>
        <div className='App-container-card'>
          <div className='card'>
            <div className='App-img'>
              <img src={foto6} alt="logo" className="card-img-top" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Components</h5>
              <p className="card-text">Build encapsultaed components that mange theur state.</p>
            </div>
          </div>
        </div>
        <div className='App-container-card'>
          <div className='card'>
            <div className='App-img'>
              <img src={foto2} alt="logo" className="card-img-top" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Single-Way</h5>
              <p className="card-text">A set of immutable values are passed to the componet's.</p>
            </div>
          </div>
        </div>
        <div className='App-container-card'>
          <div className='card'>
            <div className='App-img'>
              <img src={foto3} alt="logo" className="card-img-top" />
            </div>
            <div className="card-body">
              <h5 className="card-title">JSX</h5>
              <p className="card-text">Statically-typed designed to run on modern browsers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;