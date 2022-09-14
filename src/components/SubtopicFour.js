import './HeadlineSubtopic.css';
import './Subtopic.css';
import './ContentSubtopic.css';
import iconFour from '../imagens/icon4.png'
function SubtopicFour(){
    return(
        <div className ="subtopic">
        <img src={iconFour} alt={iconFour}/>
        <h1 id="healine-black">JSX</h1>
        <p className="content-subtopic" >Statically-typed designed to run on modern browsers.</p>
        </div>
    )
}
export default SubtopicFour