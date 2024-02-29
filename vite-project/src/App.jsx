import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'



function App() {

  return (
    <div className="App">
    <div className='header'>
    <Navbar/>
    <Hero title="Say hello to ReactJS" description="You will learn how to use"/>
    </div>
    </div>
  )
}

export default App
