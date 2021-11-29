import "./App.css";
/* A continuación se obtiene del archivo index.js su 
exoportación index, sin embargo, la ruta ya hace referencia
de que dentro la carpeta Main existe un archivo index.js o Main.js 
donde obtendrá el dato */
import Main from "./components/Main";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
