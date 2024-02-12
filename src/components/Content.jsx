import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

function Content() {
    return (
<div id="content">
<section>
<img class="icons" src={icon1} alt="icon1" />
<h2>Declarative</h2>
<p>React makes it<br />painless to create<br />interactive Uls.</p>
</section>

<section>
<img class="icons" src={icon2} alt="icon2" />
<h2>Components</h2>
<p>Build encapsulated<br />components that<br />manage their state</p>
</section>

<section>
<img class="icons" src={icon3} alt="icon3" />
<h2>Single-Way</h2>
<p>A set of immutable<br />values are passed to<br />the component's.</p>
</section>

<section>
<img class="icons" src={icon4} alt="icon4" />
<h2>JSX</h2>
<p>Statically-typed,<br />designed to run on<br />modern browsers</p>
</section>
</div>
    )
}

export default Content 