import './App.css';
import Button from './components/Button';
import MenuBar from './components/MenuBar';
import Logo from './components/Logo';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import ImageFour from './components/ImageFour';


function App() {
  return (
    <div className="App">
        <div id="container">
            <div id='top'>
                <Logo />
                <MenuBar />
            </div>
            <div id='bottom'>
              <h1>Say hello to ReactJS</h1>
              <p><span>You will learn how to use </span>
              <span>the most popular frontend library, </span>
              <span>and become a super Ninja developer.</span></p>
              <Button />
            </div>
        </div>
        <div id="container2">
            <ImageOne />
            <ImageTwo />
            <ImageThree />
            <ImageFour />  
          </div>
    </div>
  );
}
export default App;