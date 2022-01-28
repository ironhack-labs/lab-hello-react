import Cards from './Cards'
import img1 from '../images/icon1.png'
import img2 from '../images/icon2.png'
import img3 from '../images/icon3.png'
import img4 from '../images/icon4.png'


function InfoCards(){


const cardsInfo = {
  info1: {
    image: {img1},
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"
  },
  info2: {
    image: {img2},
    title: "Components",
    description: "Build encapsulated components that manage their state"
  },
  info3: {
    image: {img3},
    title: "Single-Way",
    description: "A set of inmutable values are pased to the component's"
  },
  info4: {
    image: {img4},
    title: "JSX",
    description: "Statically-typed, deseigned to run on modern browsers"
  },
  }

  return(
    <div>
      <Cards 
          {...cardsInfo.info1}
      />
      <Cards
          {...cardsInfo.info4}
      />
      <Cards 
          {...cardsInfo.info3}
      />
      <Cards 
          {...cardsInfo.info2}
      />
    </div>
    
  )

}

export default InfoCards;