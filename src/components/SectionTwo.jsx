import './SectionTwo.css'
import DeclarativeImg from '../assets/edit_code.png'
import ComponentsImg from '../assets/video.png'
import SingleImg from '../assets/settings.png'
import JsxImg from '../assets/code.png'

function SectionTwo(){
    return (
        <div id="section-two-container">
            <div className="info-box card">
            <img src={DeclarativeImg} alt="Declarative Pictogram" />
            <div className="text-container">
            <h3 className="info-box-heading">Declarative</h3>
            <p className="info-box-content">React makes it painless to create interactive UIs.</p>
            </div>
            
        </div>
        <div className="info-box card">
            <img src={ComponentsImg} alt="Components Pictogram" />
            <div className="text-container">
            <h3 className="info-box-heading">Components</h3>
            <p className="info-box-content">Build encapsulated components that manage their states.</p>
            </div>
            
        </div>
        <div className="info-box card">
            <img src={SingleImg} alt="Single-Way Pictogram" />
            <div className="text-container">
            <h3 className="info-box-heading">Single-Way</h3>
            <p className="info-box-content">A set of immutable values are passed to the components.</p>
            </div>
            
        </div>
        <div className="info-box card">
            <img src={JsxImg} alt="JSX Pictogram" />
            <div className="text-container">
            <h3 className="info-box-heading">JSX</h3>
            <p className="info-box-content">Statically typed, designed to run on modern browsers.</p>
            </div>
            
        </div>
        </div>
        
    )
}

export default SectionTwo