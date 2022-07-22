import logo from './logo.svg';
import './App.css';
import nav1 from "./images/ironhack-logo-xs.png"
import nav2 from "./images/menu-top-xs.png"
import UserItem from './components/Userinformation';

function App() {

  function MyNav(){
    return(
      <div>
        <nav className='myNav'>
        <img src={nav1}></img>
        <img className='iconNav2' src={nav2}></img>
        </nav>
      </div>
    )
  }

  function MyBody(){
    return(
      <div>
        <section className='myBody'>
          
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use <br></br> the most popular fronted library, <br></br> and become a super Ninja developer.</p>
          <button className='myButton'>Awesome!</button>
        </section>
      </div>

    )
  }

const listInformation=[
    {
      img:"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
      tittle:"Declarative",
      context:"React makes it painless to create interactive UIs"
    },
    {
      img:"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
      tittle:"Components",
      context:"Build encapsulated components that manage their state"
    },
    {
      img:"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
      tittle:"Single-Way",
      context:"A set of immutable values are passed to the component´s"
    },
    {
      img:"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
      tittle:"JSX",
      context:"Statically-typed,designed to run on modern browsers"
    },
    
]




  return (
    <div className="App">
      <MyNav/>
      <MyBody/>

    <section className='noBody'>
    {listInformation.map((user,index_user)=>(
      <UserItem key={index_user} img={user.img} tittle={user.tittle}  context={user.context}/>
      ))
    }
    </section>
    </div>
  );
}

export default App;
