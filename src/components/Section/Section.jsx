import SectionCard from '../SectionCard/SectionCard';
import ImgCardOne from '../../images/icon_settings.png';
import ImgCardTwo from '../../images/icon_player.png';
import ImgCardThree from '../../images/icon_gear.png';
import ImgCardFour from '../../images/icon_code.png';
import { v4 as uuidv4 } from 'uuid';

function Section(){
    const data = [
        {src: ImgCardOne, title: 'Declarative', description: 'React makes it painless to create interactive UIs' },
        {src: ImgCardTwo, title: 'Components', description: 'Build encapsulated components' },
        {src: ImgCardThree, title: 'Single-Way', description: 'A set of immutable values' },
        {src: ImgCardFour, title: 'JSX', description: 'Statically-typed' }
    ]

    return (
        <div class="SectionCards">
            {data.map((card) => {
                return <SectionCard key={uuidv4()} src={card.src} title={card.title} description={card.description} />
            })}
        </div>
        
    );
}

export default Section;