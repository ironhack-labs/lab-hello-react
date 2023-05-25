import logo from './logo.svg';
import './App.css';

import './App.css';

// App.js
// ... imports stay unchanged

function App() {
  const reptiles = ["alligator", "snake", "lizard"];

  const personas = ["juan", "jose", "nico"];



  return (
    
    <div>
      <div>
      <h1 className='hi'>Reptiles</h1>
      {reptiles.map((reptile) => (
        <li>{reptile}</li>
      ))}
      <h1 className='hi'>Personas</h1>
      {personas.map((personas) => (
        <li>{personas}</li>
      ))}
</div>
</div>

  );
}

export default App;








