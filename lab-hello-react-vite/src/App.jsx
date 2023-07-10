import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FooterBar from './components/FooterBar'
import NavigationBar from './components/NavigationBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar/>
    <FooterBar/>

    </>
  )
}

export default App
