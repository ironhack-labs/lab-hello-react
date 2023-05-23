import './App.css';
import Navbar from './components/nadvar'
import Button from './components/button'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <div className='head'><Navbar />
      <h1 className='title'>Say hello to ReactJS</h1>
      <p className='text'>You will learn how to use the most popular frontend library, and become a super Ninja developer.
      </p>
      <div className='button'>
      <Button />
      </div>
      </div>
      <div className='footer'>
      <Footer />
      </div>
      </div>
      
  );
}
export default App;