import './section.css';
import Button from '../button/button'

function Section(){
    return (
        <div className = {'section'}>
            <h1>Say hallo to <br /> ReactJS</h1>
            <p>You will learn how to use the most populat frontecnd library, and become a developer</p>
            <Button />
        </div>        
    )
}

export default Section;