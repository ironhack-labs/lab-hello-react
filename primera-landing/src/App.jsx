import Description from '../components/Description'
import Navbar from '../components/Navbar'
import Tittle from '../components/Tittle'
import './App.css'

function App() {

  return (
    <div className='App'>
      <main>
        <Navbar />
        <Tittle />
      </main>
      <Description />
    </div>
  )
}

export default App
