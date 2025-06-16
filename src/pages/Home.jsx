import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Cards from "../data/cards.json"
import FeatureCard from "../components/FeatureCard"

function Home() {

  console.log(Cards)

  return(
    <>
      <Navbar/>
      <Hero/>
      <div className="cards-container">
        <FeatureCard cards={ Cards }/>
      </div>
    </>
  )
}

export default Home;