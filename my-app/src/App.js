import React from 'react';
import './App.css';
import Article from './components/Article';


const descriptions=[
  {
  image: 'hello_react/src/images/icon1.png',
  title: 'Single-Way',
  description:'React makes it painless to create interactive UIs'
},

{
  image: "/Users/mauriciobenaventeibanez/react1Lab/lab-hello-react/my-app/src/images/icon2.png",
  title: 'Components',
  description:'React makes it painless to create interactive UIs'
},
{
  image: 'hello_react/src/images/icon3.png',
  title: 'Single-Way',
  description:'React makes it painless to create interactive UIs'
},
{
  image: 'hello_react/src/images/icon4.png',
  title: 'JSX',
  description:'React makes it painless to create interactive UIs'
},
];


function App() {
  return (
    <div className="App">
      <nav>
        <img src= alt='logo'></img> 
        <img src='hello_react/src/images/menu-top-xs.png'></img>
      </nav>
      <h1>Say Hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
      <button>Awesome!</button>

      <div className='description'>
        <Article characteristic={descriptions[0]}/>
        <Article characteristic={descriptions[1]}/>
        <Article characteristic={descriptions[2]}/>
        <Article characteristic={descriptions[3]}/>
      </div>

    </div>
  );
}
export default App;


