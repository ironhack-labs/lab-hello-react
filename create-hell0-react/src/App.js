import logo from './logo.svg';
import './App.css';
import Images from './Images'
import picture1 from './images/ironhack-logo.png'
import picture2 from './images/ironhack-logo2.png'
import picture3 from './images/1.png'
import picture4 from './images/2.png'
import picture5 from './images/3.png'
import picture6 from './images/4.png'




import './App.css';

function App() {

    return (
        <div className="App">
            <section>
                <div class="images">
                    <img src={picture1} alt="ironhack" />
                    <img src={picture2} alt="ironhack" />
                    {/* <Images picture={picture1}/> */}
                </div>
                <div class="rest">
                    <h1>Say hello to <br></br>ReactJs</h1>
                    <p>You will learn how to use <br></br> the most popularfrontedn librery, <br /> and become a sper ninja developer.</p>
                    <button>Awesme!</button>
                </div>

            </section>
            <div class="img-footer">
                <div class="block">
                    <img src={picture3} alt="" />
                    <h3>Declarative</h3>
                    <p>Reacts make it <br /> pailess to create <br />interactive UIs.</p>
                </div>
                <div class="block">
                    <img src={picture4} alt="" />
                    <h3>components </h3>
                    <p>Build encapsulated <br />components that <br />manage their state.</p>
                </div>
                <div class="block">
                    <img src={picture5} alt="" />
                    <h3>Single-Way</h3>
                    <p>A set of inmutable <br />values ar passed to <br />the component's</p>
                </div>
                <div class="block">
                    <img src={picture6} alt="" />
                    <h3>JSX</h3>
                    <p>Statically-Typed <br />designed to run on <br />modern browsers.</p>
                </div>

            </div>





        </div>
    );
}




export default App;
