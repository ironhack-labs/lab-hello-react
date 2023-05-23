import Icon1 from "../src/images/Icon1.js"
import Icon2 from "../src/images/Icon2.js"
import Icon3 from "../src/images/Icon3.js"
import Icon4 from "../src/images/Icon4.js"

function Content () {
    return (
        <div class="Content">
            <div class="Element">
                <Icon1 />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div class="Element">
                <Icon2 />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>

            <div class="Element">
                <Icon3 />
                <h2>Single-Way</h2>
                <p>A Set of immutable values are passed to the component's.</p>
            </div>

            <div class="Element">
                <Icon4 />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>

        </div>

    );
}

export default Content;