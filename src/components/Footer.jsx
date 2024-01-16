import '../Footer.css'

function Footer(){
    return(
<div className='footer'>
    <div id='col-1' className="col"><img src="./Wrench.png" alt="" /> <h2>Declarative</h2><p>React makes it painless to create <br/>interactive UIs.</p> </div>
    <div id='col-2' className="col"><img src="./Components.png" alt="" /><h2>Components</h2><p>Build encapsulated components that manage <br /> their state.</p></div>
    <div id='col-3' className="col"><img src="./Gear.png" alt="" /><h2>Single-way </h2><p>A set of immutable values to the component's.</p></div>
    <div id='col-4' className="col"><img src="./JSX.png" alt="" /><h2 id='h24'>JSX</h2><p>Statically-typed designed to run <br /> on modern browsers.</p> </div>

</div>
)
}

export default Footer