

// src/App.jsx
import './App.css';

import Hero from './components/Hero';
import Gallery from './components/Gallery';
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div className="App">
      <div className="bg-zinc-800 max-w-full min-h-screen bg-cover ml-20 px-20">
        <Hero />
      </div>

      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default App;