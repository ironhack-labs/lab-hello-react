// Import CSS
import './landingPage.css'

// Importing Images
import MenuTop from './images/menu-top-xs.png'
import IronhackLogo from './images/ironhack-logo-xs.png'
import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'
import Icon4 from './images/icon4.png'

const LandingPage = () => {
    return (
            <body>
                <header>
                    <nav>
                        <ul>
                            <li><img src={IronhackLogo} alt="Ironhack" /></li>
                            <li><img src={MenuTop} alt="Menu" /></li>
                        </ul>
                    </nav>
                    <div className='headerText'>
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn how to use</p>
                        <p>the most popular frontend library,</p>
                        <p>and become a super Ninja developer.</p>
                        <button>Awesome!</button>
                    </div>
                </header>

                <div className='items'>
                    <div className='item'>
                        <img src={Icon1} alt="" />
                        <h4>Declarative</h4>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className='item'>
                        <img src={Icon2} alt="" />
                        <h4>Components</h4>
                        <p>Build encapsulated components that mange their state</p>
                    </div>
                    <div className='item'>
                        <img src={Icon3} alt="" />
                        <h4>Single-Way</h4>
                        <p>A set of immutable values are passed to the component's.</p>
                    </div>
                    <div className='item'>
                        <img src={Icon4} alt="" />
                        <h4>JSX</h4>
                        <p>Statically-typed, designed to run on moder browsers.</p>
                    </div>
                </div>
                
            </body>
    );
}
   

  export default LandingPage;