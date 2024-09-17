import imageTwo from "../images/icon2.png"

function ImageTwo() {
    return (
        <div class="image">
            <img
                src = { imageTwo }
                alt = "Components"
            />
            <h3> 
                Components
            </h3>
            <p class = "img-description">
                Build encapsulated  <br/> 
                components that     <br/>
                manage their state.
            </p>
        </div>
    );
}

export default ImageTwo;