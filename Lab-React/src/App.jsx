import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import desktop from './images/desktop.png'
import laptop from './images/laptop.png'
import wrench from './images/wrench.png'
import lapCode from './images/lapCode.png'

// const images = [
//   {desktop},
//   {laptop},
//   {wrench},
//   {lapCode}
// ];

function App() {
  const cardsData = [
    {
      title: "Declarative",
      description: "React makes it painless to create interactive UIs",
      image: {wrench}
    },
    {
      title: "Components", 
      description: "Build encapsulated components that manage their state",
      image: {laptop}
    },
    {
      title: "Single-Way", 
      description: "A set of immutable values are passed to the component's",
      image: {desktop}
    },
    {
      title: "JSX", 
      description: "Statically-typed, designed to run on modern browsers.",
      image: {lapCode}
    }
  ]
 
  return (
    <div className='App bg-cover bg-slate-500 m-8 pb-24'>
      <Navbar />
      <Main />
      {cardsData.map((card, index) => (
        <Card key={index} 
        title={card.title}
        description={card.description}
        image={card.image}
        />
      ))}
    </div>
    
  )
}

export default App
