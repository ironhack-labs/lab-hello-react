import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Main from './components/Main';

function App() {
  const cards = [{
    img : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
    tittle : "Declarative",
    paragraph : "React makes it painless to create interactive UIs."
  },{
    img : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
    tittle : "Components",
    paragraph : "Build encapsulated components that manage their state."
  },{
    img : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
    tittle : "Single-Way",
    paragraph : "A set of immutable values are passed to the component's."
  },{
    img : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
    tittle : "JSX",
    paragraph : "Statically-typed designed to run on modern browsers."
  }]
  return (
    <div className="App">
      <div className="App-header">
        <Main/>
      </div>
      <div className= "grid">
      { cards.map(card =>
        <Card
          {...card}
        />
      )};
      </div>
     
      

    </div>
  );
}

export default App;
