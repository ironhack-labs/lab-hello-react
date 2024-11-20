import './index.css'
import Navbar from './component/Navbar/Navbar'
import Container from './component/Container/Container'

function App() {
  const imageArray = [
    {
      name: 'ironhack-logo',
      // image:
      //   '../src/images/ironhack-logo.png',
      image:
        'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png',
    },
    {
      name: 'menu-top',
      // image: '../src/images/menu-top.png'
      image:
        'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png',
    },
  ]
  const containerArray = [
    {
      title: 'Declarative',
      catch: 'React makes it painless to create interactive UIs,',
      image:
        'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png',
    },
    {
      title: 'Components',
      catch: 'Build encapsulated components that manage their state.',
      image:
        'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png',
    },
    {
      title: 'Single-Way',
      catch: "A set of immutable values are passed to the component's.",
      image:
        'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png',
    },
    {
      title: 'JSX',
      catch: 'Statically-typed, designed to run on modern browsers',
      image:
        'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png',
    },
  ]
  const myVariable =
    'You will learn how to use the most popular frontend library, and become a super Ninja developer.'
  return (
    <>
      <Navbar nav={imageArray}></Navbar>

      <main>
        <div
          className="App"
          style={{
            color: 'white',
            backgroundColor: 'rgb(21, 28, 43)',
            height: 700,
            padding: 80,
          }}
        >
          <h1
            style={{
              fontSize: 100,
              color: 'white',
              paddingBottom: 20,
            }}
          >
            Say hello to<br></br>ReactJS
          </h1>
          <p
            style={{
              fontSize: 30,
              width: 450,
              paddingBottom: 100,
            }}
          >
            {myVariable}
          </p>
          <a
            href="./"
            style={{
              backgroundColor: 'white',
              padding: 25,
              textDecoration: 'none',
              color: 'rgb(21, 28, 43)',
              borderRadius: 5,
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Awsome!
          </a>
        </div>
        <div class="Box">
          {containerArray.map((card) => {
            return <Container container={card} />
          })}
        </div>
      </main>
    </>
  )
}

export default App
