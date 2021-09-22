
import ImageThree from "../images/Image3";
import ImageFour from "../images/Image4";
import ImageFive from "../images/Image5";
import ImageSix from "../images/Image6";

function Gallery () {
    return (
        <div class="container">
            <ImageThree />
             <h3>Declarative</h3>
             <p> 
              React makes it <br/>
              painless to create interactive UIs.   
             </p>
             <div>
            <ImageFour />
             <h3>Components</h3>
             <p> 
              Build encapsulated <br/>
              components that manage their state.   
             </p>
             <div>
            <ImageFive />
             <h3>Single-Way</h3>
             <p> 
              A set of immutable <br/>
              values are passed to the components.   
             </p>
             <div>
            <ImageSix/>
             <h3>JSX</h3>
             <p> 
              Statically-typed <br/>
              designed to run on modern browsers.  
             </p>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Gallery;