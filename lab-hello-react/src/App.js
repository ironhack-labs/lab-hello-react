import logo from './logo.svg';
import './App.css';

import { Navbar } from './components';
import {Body} from './components'

function App() {
 	
  return (
    <div className='App'>
	  <div className='container-head'>  
	  	<Navbar/>
	  </div>
	  <div>
	  	<Body/>
	  </div>
    </div>
  );
}

export default App;
