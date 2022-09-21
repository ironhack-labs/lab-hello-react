import Funcionuno from "./funcionesUno";
import FuncionunoDos from "./funcionesDos";
import FuncionunoTres from "./funcionesTres";
import FuncionunoCuatro from "./funcionesCuatro";

function contenedor (){
    return (
        <div id="contenedor">
        <Funcionuno/>
        <FuncionunoDos/>
        <FuncionunoTres/>
        <FuncionunoCuatro/>
        </div>
    )
}

export default contenedor