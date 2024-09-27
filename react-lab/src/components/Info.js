import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'




function Info(){
    return(
        <div className='info'>


<div className='info-card'>
<img className='infoImg' src={img1} alt="img1"/>
<h4>Declerative</h4>
<p>React makes it painless to create interactive UIs.</p>
</div>

<div className='info-card'>
<img className='infoImg' src={img2} alt="img2"/>
<h4>Components</h4>
<p>Build encapsulated components that manage their state.</p>
</div>

<div className='info-card'>
<img className='infoImg' src={img3} alt="img3"/>
<h4>Single-Way</h4>
<p>A set of immutable values are passed to the component's.</p>
</div>

<div className='info-card'>
<img className='infoImg' src={img4} alt="img4"/>
<h4>JSX</h4>
<p>Statically-typed, designed to run on modern browsers</p>
</div>


        </div>
    )
}

export default Info;