import Infos from './Infos.js'
import './SubContent.css'
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';

function SubContent() {
    return (
        <div className='sub-content'>
            <Infos 
                img = {icon1}
                title = 'Declarative'
                description = 'React makes it painless to create interactive UIs.'
            />
            <Infos 
                img = {icon2}
                title = 'Components'
                description = 'Build encapsulated components that manage their state.'
            />
            <Infos 
                img = {icon3}
                title = 'Single-Way'
                description = 'A set of immutable values are passed to the components.'
            />
            <Infos 
                img = {icon4}
                title = 'JSX'
                description = 'Statically-typed desgined to run on modern browsers.'
            />
        </div>
    )
}

export default SubContent;