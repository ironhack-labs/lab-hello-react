import './GalleryCard.css'

const GalleryCard = ({content}) => {
  return (
    <div className='GalleryCard'>
        <img src={content.src} alt="example"></img>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
    </div>
  )
}

export default GalleryCard