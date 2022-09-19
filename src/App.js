// import logo from './logo.svg';
//CSS
import './App.css';
import './components/Header/Header.css'
import './components/CardHolder/CardHolder.css'
import './components/Card/Card.css'
import './components/Navbar/Navbar.css'
import './components/Button/Button.css'
// CSS END
import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import CardHolder from "./components/CardHolder/CardHolder"


function App() {
  return (
    <div className="App">
      <Header />
      <CardHolder />
    </div>
  );
}

export default App;
