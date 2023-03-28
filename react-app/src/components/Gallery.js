import one from '../images/3.png';
import two from '../images/4.png';
import three from '../images/5.png';
import four from '../images/6.png';



function Gallery(){
    return (
        <div id="gallery">
        <div className="card"><img src="{one}" alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>

        </div>
        <div className="card"><img src="{two}" alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p></div>
        <div className="card"><img src="{three}" alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p></div>
        <div className="card"><img src="{four}" alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p></div>
        </div>
    )
}

export default Gallery;