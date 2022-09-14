import './HeadlineSubtopic.css';
import './Subtopic.css';
import './ContentSubtopic.css';
import iconThree from '../imagens/icon3.png'
function SubtopicThree(){
    return(
        <div className ="subtopic">
        <img src={iconThree} alt={iconThree}/>
        <h1 id="healine-black" >Single-Way</h1>
        <p className="content-subtopic" >A set of immutable values are passed to the component's.</p>
        </div>
    )
}
export default SubtopicThree