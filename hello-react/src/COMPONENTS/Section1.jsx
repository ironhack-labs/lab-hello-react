import img1 from "../assets/icon1.png"
import img2 from "../assets/icon2.png"
import img3 from "../assets/icon3.png"
import img4 from "../assets/icon4.png"


function Section1 (){

return(
<>

<section class="seccion-img">
    <div>
        <img src={img1} alt="img1" />
        <h1>Declarative</h1>
        <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div>
    <img src={img2} alt="img2" />
        <h1>Components</h1>
        <p>Build encapsulated components that manage their state.</p>
    </div>
    <div>
    <img src={img3} alt="img3" />
        <h1>Single-Way</h1>
        <p>A set of immutable values are passed to the component's.</p>
    </div>
    <div>
    <img src={img4} alt="img4" />
    <h1>JSX</h1>
    <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
</section>


</>
)



}

export default Section1