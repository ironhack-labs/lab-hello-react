import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

import Navbar from './Navbar';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <div className="head"> 
          <Navbar/>
          
          <Title/>
      </div>
      <div className="cards">
          <Card1/>
          <Card2/>
          <Card3/>
          <Card4/>
      </div> 
    </div>
  );
}

export default App;
