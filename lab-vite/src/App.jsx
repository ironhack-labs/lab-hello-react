// src/App.jsx
import './App.css';
import './index.css'
import HeaderButton from './headerButton';
import HeaderText from './headerText';
import NavBar from './navBar';


function App() {
  return (
    <div className="App main-container">
      <div className="HeaderContainer d-flex flex-column mb-3">
        <NavBar/>
        <HeaderText/>
        <HeaderButton/>
      </div>
    </div>
  );
}

export default App;