
import Navbar from './components/Navbar';
import Card from './components/Card';
import Properties from './components/Properties';

import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';



function App() {
  return (
    <div className="App">
      
      <div className='home'>
        <Navbar/>
        <Card/>
      </div>
      <div className='properties'>
        <Properties image={icon1} title='Declarative' text='React makes it painless to create interactive UIs'/>
        <Properties image={icon2} title='Components' text='React makes it painless to create interactive UIs'/>
        <Properties image={icon3} title='Single-Way' text='React makes it painless to create interactive UIs'/>
        <Properties image={icon4} title='JSX' text='React makes it painless to create interactive UIs'/>
      </div>

    </div>
  );
}

export default App;