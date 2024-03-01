import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Column from './components/Column'
import declarativeImage from './assets/declarative.png';
import componentsImage from './assets/components.png';
import singleWayImage from './assets/single-way.png';
import jsxImage from './assets/jsx.png';


const arrayColumns = [
  {
    image: declarativeImage,
    alt: "image",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"
  },
  {
    image: componentsImage,
    alt: "image",
    title: "Components",
    description: "Build encapsulated components that manage their state"
  },
  {
    image: singleWayImage,
    alt: "image",
    title: "Single-way",
    description: "A set of immutable values are passed to component's"
  },
  {
    image: jsxImage, 
    alt: "image",
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers"
  },
]


function App() {

  return (
    <div className="App">
    <div className='header'>
    <Navbar/>
    <Hero title="Say hello to ReactJS" description="You will learn how to use the most popular frontend library, and become a super Ninja developer"/>
    </div>
    <div className='section-1'>
    {arrayColumns.map((content, index) => (
        <Column key={index} content={content} />
      ))}
    </div>
    </div>
  )
}

export default App
