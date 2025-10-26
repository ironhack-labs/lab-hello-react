// src/App.jsx
import './App.css';
import logo1 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706e67.png'
import logo2 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706e67.png'
import logo3 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e332e706e67.png'
import logo4 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e342e706e67.png'
import IconNav1 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69726f6e6861636b2d6c6f676f2d78732d6461726b2e706e67.png'
import IconNav2 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f6d656e752d746f702d78732d6461726b2e706e67.png'
import BottomDown from './BottomDown';
import NavigationBar from './NavigationBar';
import UpperTop from './UpperTop';

function App() {
  return (
    <div className="App">
      <NavigationBar IconNav1={IconNav1} IconNav2={IconNav2}/>
      <UpperTop/>
      <div className='BottomDownArea'>
        <BottomDown logo={logo1} header='Declarative' text='React makes it painless to create interactive UIs.'/>
        <BottomDown logo={logo2} header='Components' text='Build encapsulated components that manage their state.'/>
        <BottomDown logo={logo3} header='Single-Way' text="A set of immutable values are passed to the component's."/>
        <BottomDown logo={logo4} header='JSX' text='Statically-typed, designed to run on modern browsers.'/>
      </div>
    </div>
  );
}

export default App;