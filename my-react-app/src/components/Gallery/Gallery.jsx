import GalleryCard from "../GalleryCard/GalleryCard"
import './Gallery.css'

const Gallery = () => {
    const data = [
        {
            src:'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png',
            title:'Declarative',
            text:'React makes it painless to create interactive UIs'
        },{
            src:'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png',
            title:'Components',
            text:'Build encapsulated components that manage their state.'
        },{
            src:'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png',
            title:'Single-Way',
            text:'A set of immutable values are passed to component´s'
        },{
            src:'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png',
            title:'JSX',
            text:'Statically-typed, designed to run on modern browsers.'
        }
    ] 
  return (
    <div className="Gallery">
    {data.map(elem => {
        return <GalleryCard content={elem}/>
    })}
        
    </div>
  )
}

export default Gallery