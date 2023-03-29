// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='main'>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer
        </p>
        <button className='btn'>Awesome!</button>
      </div>

      <div>
        <Gallery />
      </div>
    </div>
  );
}
export default App;
