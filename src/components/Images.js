 
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import Icon4 from '../images/icon4.png'

function Images() {
    return (
     <div id="images" class="row">
        <div class="col-md-3 d-flex justify-content-start"><img src={Icon1} alt="Icon1" /></div>
        <div class="col-md-3 d-flex justify-content-start"><img src={Icon2} alt="Icon2" /></div>
        <div class="col-md-3 d-flex justify-content-start"> <img src={Icon3} alt="Icon3" /></div>
        <div class="col-md-3 d-flex justify-content-start"><img src={Icon4} alt="Icon4" /></div>
     </div>
    );
  }
   
  // To make the component available, we have to export it
  export default Images;