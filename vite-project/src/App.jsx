// src/App.jsx
import './App.css';
import NavBar from './NavBarFolder/navbar';
import NavBarText from './NavBarFolder/navbartext';
import Button from './NavBarFolder/button';
import Icons from './Icons/icons';


function App() {
  return (
    <div>
      <nav>
      <NavBar />
      <NavBarText />
      <Button />
      </nav>
      <footer>
      <div className = "icon-group">
      <Icons 
      image = "/src/assets/icon1.png"
      title = "Declarative"
      p = "React make painless to create interactive UIs"
      />
      <Icons 
      image = "/src/assets/icon2.png"
      title = "Components"
      p = "Built encapsulate components that manage their state"
      />
      <Icons 
      image = "/src/assets/icon3.png"
      title = "Single -way"
      p = "A set of inmmutable values are passed to de component's "
      />
       <Icons 
      image = "/src/assets/icon4.png"
      title = "JSX"
      p = "Statically-typed designed to run on modern browsers "
      />
    </div>
      </footer>
    </div>
  );
}

export default App;