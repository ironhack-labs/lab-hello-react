import Logo from './images/ironhack-logo-xs.png'
import './App.css';
import NavBar from './components/NavBar';
import Middle from './components/Middle';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Middle/>
      <Container/>
      
    </div>
  );
}

export default App;
