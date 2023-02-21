import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav className='App-header'>
      <Header />
      <img src='/images/logo.png' alt='logo'></img>
      <MainSection />
      <img src='/images/image6.png' alt='menu'></img>
      </nav>
      <div className='divText'>
        <h1>Say Hello to <br></br> ReacJs</h1>
        <p>You will learn how to use <br></br>the most popular frontend library, <br></br>and become a super Ninja developer</p>
        <button><strong>Awesome!</strong></button>
        </div>
      <Footer />
    </div>
  );
}

export default App; 