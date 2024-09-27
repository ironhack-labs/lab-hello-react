import ImageThree from "../images/ImageThree"
import ImageFour from "../images/ImageFour"
import ImageFive from "../images/imageFive"
import ImageSix from "../images/ImageSix"

const Bottom = () => {
    return (
        <section className="bottom">
            <div className="subject">
                <ImageThree />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="subject">
                <ImageFour />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="subject">
                <ImageFive />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="subject">
                <ImageSix />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </section>
    )
}

export default Bottom