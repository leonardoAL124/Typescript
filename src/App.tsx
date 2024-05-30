import { AreaCuadrado } from './components/AreaCuadrado';
import { ArregloSuma } from './components/ArregloSuma';
import { ArregloDivision } from './components/ArregloDivision';
import { ArregloParImpar } from './components/ArregloParImpar';
import { ArregloAcciones } from './components/ArregloAcciones';
import { ArregloPromedio } from './components/ArregloPromedio';
import { Acumulador } from './components/Acumulador';

function App() {
  return (
    <div className='container mt-2 mb-2'>
      <h2>Actividad I</h2>
      <br />
      <h4><b>Nombre: </b>Anthony Luzón</h4>
      <h4><b>Carrera: </b>Desarrollo de Software</h4>
      <h4><b>Nivel: </b>Quinto</h4>
      <hr />
      <AreaCuadrado/>
      <hr />
      <ArregloSuma/>
      <hr />
      <ArregloDivision/>
      <hr />
      <ArregloParImpar/>
      <hr />
      <ArregloAcciones/>
      <hr />
      <ArregloPromedio/>
      <hr />
      <Acumulador/>
    </div>
  );
}

export default App;
