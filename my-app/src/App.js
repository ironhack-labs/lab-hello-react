
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
    <section>
      <Navbar />
      <Main />
      </section>

      <section className='SectionIcon'>
      <Icons />

      </section>
    </div>
  );
}

export default App;
