import './menu.css'
import Card from '../Card/card'
import { v4 as uuidv4 } from 'uuid';

function Menu () {
    const data= [
        {src: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
        title: 'Declaratives',
        description: 'React makes it painless to create intercative UIs.' 
        },
        {src: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
        title: 'Components',
        description: 'React makes it painless to create intercative UIs.' 
        },
        {src:  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
        title: 'Single-Way',
        description: 'React makes it painless to create intercative UIs.' 
        },
        {src:  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
        title: 'JSX',
        description: 'React makes it painless to create intercative UIs.' 
        }
    ]
    return (
        <div className="menu">
            {data.map(card => {
                const id = uuidv4();
                return <Card key={id} src= {card.src} title={card.title} description={card.description}/>
            })}            
        </div>
    )
}

export default Menu