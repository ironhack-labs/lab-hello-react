import imageOne from "../images/icon1.png"

function ImageOne() {
    return (
        <div class="image">
            <img
                src = { imageOne }
                alt = "Screw"
            />
            <h3> 
                Declarative
            </h3>
            <p class = "img-description">
                React makes it      <br/> 
                painless to create  <br/>
                interactive UIs.
            </p>
        </div>
    );
}

export default ImageOne;