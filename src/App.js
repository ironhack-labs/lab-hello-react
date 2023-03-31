import './App.css';
import Logo from "../src/components/logo"
import Title from "../src/components/bigTitle"
import Subtext from './components/subtext';
import Button from './components/button';
import MenuLogo from './components/menu';
import Description from './components/description';

function App() {
  return (
    <div className="App">
    <header>

      <Logo />
      <MenuLogo />

     
      <div id="text">
      <Title />
      <Subtext />
      <Button />
      </div>
    </header>

    <container>
    <Description />
    </container>
    </div>
  );
}

export default App;
