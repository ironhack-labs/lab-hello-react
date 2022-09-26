// import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import Feature from './components/Feature';

function App() {
  return (
    <div className="App ">
       <div id='main' className="App-header">
        <Navbar />
          <div id='main-section'>
            <h1>Say hello to ReactJS</h1>
            <p>You wull learn how to use the most popular frontend library, and become a super Ninja Developer.</p>
            <button>Awesome</button>
          </div>
       </div>
        <Feature />
      
    </div>
  );
}

export default App;
