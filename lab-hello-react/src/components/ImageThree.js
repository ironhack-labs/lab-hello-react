import imageThree from "../images/icon3.png"

function ImageThree() {
    return (
        <div class="image">
            <img
                src={ imageThree }
                alt="Computer screen"
            />
            <h3>
                Single-Way
            </h3>
            <p class="img-description">
                A set of immutable      <br/>
                values are passed to    <br/> 
                the component's.
            </p>
        </div>
    );
}

export default ImageThree;