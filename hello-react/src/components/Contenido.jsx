import Navbar from "./Navbar"
import Texto from "./Texto"
import Button from "./Button"

function Contenido () {
  return (
    <section>
      <Navbar />

      <div id="contenido-principal">
        <Texto />

        <Button />
      </div>
    </section>
  )
}

export default Contenido