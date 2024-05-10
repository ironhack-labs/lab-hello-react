// src/App.jsx
import { Division, Header } from './main';
import './App.css';

function App() {
  return (
    <div className="App">
   
    <Header image1={"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"} image2= {"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"}heading={"Say Hello to ReactJS"} parText={"You will Learn how use the most popular Frontend Library, and become a developer."} ></Header>
   
   <div className="div-Container">
  <Division image= {"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"} hText= {"Declarative"} pText={"React makes it painless to create interactive UIs."}></Division>
  <Division image= {"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"} hText= {"Components"} pText={"Build encapsulated components that manage their state."}></Division>
  <Division image= {"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"} hText= {"Single-Way"} pText={"A set of immutable value are passed to components"}></Division>
  <Division image= {"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"} hText= {"JSX"} pText={"Staticly typed, designed to run on modern browsers."}></Division>
   </div>
    </div>
  );
}

export default App;


