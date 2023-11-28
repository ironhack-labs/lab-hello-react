import IconOne  from "./IconOne"
import IconTwo from "./IconTwo"
import IconThree from "./IconThree"
import IconFour from "./IconFour"


function Gallery() {
  return (
    <section className='py-10 bg-w sm:py-16 lg:py-24 z-40 relative'>
        <div className="container mx-auto">
            <IconOne />
            <IconTwo />
            <IconThree />
            <IconFour />
        </div>
    </section>

  )
}

export default Gallery
