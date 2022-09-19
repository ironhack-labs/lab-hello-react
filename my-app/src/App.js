import './App.css';
import Header from './components/Header';
import Nav from './components/nav';
import Foot from './components/foot';


function App() {
  return (
    <div>
      <div id="header">
      <Nav />
      <Header />
      </div>
      <div className='footer'>
      <Foot/>
      </div>
    </div>
  );
}

export default App;
