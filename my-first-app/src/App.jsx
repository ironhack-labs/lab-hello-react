// src/App.jsx
import './App.css';
import Header from './Header';
import HeaderText from './HeaderText'
import Button from './Button'
import Card from './Card'


function App() {
  return (
    <div className = "main">
    <div className="header-main">
       <Header />
       <HeaderText />
       <Button />
    </div>
    <div className = "card-group">
      <Card 
      image = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
      title = "Declarative"
      p = "React make painless to create interactive UIs"
      />
      <Card 
      image = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
      title = "Components"
      p = "Built encapsulate components that manage their state"
      />
      <Card 
      image = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
      title = "Single -way"
      p = "A set of inmmutable values are passed to de component's "
      />
       <Card 
      image = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
      title = "JSX"
      p = "Statically-typed designed to run on modern browsers "
      />
    </div>
    </div>
  );
}

export default App;
