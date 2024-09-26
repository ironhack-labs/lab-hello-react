import './App.css';
import Homepage from './components/Homepage';
import logo from './assets/images/ironhack-logo-xs.png';
import menuBtn from './assets/images/menu-top-xs.png';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';

function App() {
  const imgs = [logo, menuBtn, icon1, icon2, icon3, icon4];
  return (
    <div className='App'>
      <Homepage imgs={imgs} />
    </div>
  );
}

export default App;
