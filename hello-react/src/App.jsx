import './App.css';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Hero></Hero>

      <div className='cards-container'>
      <Card
            img='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'
            h2='Declarative'
            text='React make it painless to create interactive UIs'
      >
      </Card>
      <Card
            img='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'
            h2='Declarative'
            text='React make it painless to create interactive UIs'
      >
      </Card>
      <Card
            img='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'
            h2='Declarative'
            text='React make it painless to create interactive UIs'
      >
      </Card>
      <Card
            img='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'
            h2='Declarative'
            text='React make it painless to create interactive UIs'
      >
      </Card>
      </div>
     
    </div>
  );
}

export default App;