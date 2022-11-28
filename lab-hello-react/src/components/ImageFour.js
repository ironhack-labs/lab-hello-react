import imageFour from "../images/icon4.png"

function ImageFour() {
    return (
        <div class="image">
            <img
                src={ imageFour }
                alt="Browser on laptop"
            />
            <h3>
                JSX
            </h3>
            <p class="img-description">
                Statically-typed    <br/>
                designed to run on  <br/>
                modern browsers.
            </p>
        </div>
        
    );
}

export default ImageFour;