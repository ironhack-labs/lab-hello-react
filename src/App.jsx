import Header from './components/header/header'
import Cards from './components/cards/cards'


function App() {

  return (
    <>
  <Header />
  <div className='cards row row-cols-lg-4 g-lg-2 m-2'>
  <Cards title= "Declarative" text= "React makes it painless to create intrative UIs" URLimg= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" />
  <Cards title= "Components" text= "Build encapsulated components that manage their state." URLimg= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" />
  <Cards title= "Single-way" text= "A set of immutable values are passed to the components" URLimg= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" />
  <Cards title= "Jsx" text= "Statically-type. Designed to run on modern browsers" URLimg= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" />
  </div>
    </>
  )
}

export default App
