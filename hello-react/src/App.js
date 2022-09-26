import logo from './logo.svg';
import './App.css';
import ImageThree from './images/ImageThree';
import ImageFour from './images/ImageFour';
import ImageFive from './images/imageFive';
import ImageSix from './images/ImageSix';
import Header from './components/Header'
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App">
    <section className='head'>
      <Header />
      <img class="logoOne"src={logo} alt="React Logo"/>
      <img class="logoTwo"src={logo} alt="React Logo"/>
      <img class="logoThree"src={logo} alt="React Logo"/>
      <img class="logoFour"src={logo} alt="React Logo"/>
      <img class="logoFive"src={logo} alt="React Logo"/>
      <img class="logoSix"src={logo} alt="React Logo"/>
    </section>
    <Bottom />
    </div>
  );
}

export default App;
