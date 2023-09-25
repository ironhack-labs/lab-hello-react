
import Header from './components/header/Header'
import './components/header/header.css';
import IconsBody from './components/icons/IconBody';
import './components/icons/IconBody.css'



function App() {
  return (
    <>
      <div>
        <Header 
          logo = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
          menu= "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
          title= "Say hello to ReactJS"
          intro= "You will learn how to use the most popular frontend library, and become a super Ninja developer"
          button= "Awesome!"
        />
      </div>

    
      <div className='d-flex justify-content-around'>
        <div className='icon-box text-muted'>
          <IconsBody
                  image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
                  title="Declarative"
                  text="React makes it painless to create interactive UIs"
                />
        </div>
        <div className='icon-box text-muted'>
          <IconsBody
            image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            title="Components"
            text="Build encapsulated components that manage their state"
          />
        </div>
        <div className='icon-box text-muted'>
          <IconsBody
                image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
                title="Single-Way"
                text="A set of immutable values are passed to the component's."
              />
        </div>
        <div className='icon-box text-muted'>
          <IconsBody
            image="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            title="JSX"
            text="Statically-typed, designed to run on modern browsers"
          />
        </div>
      </div>
    
    </>
  );
}

export default App;