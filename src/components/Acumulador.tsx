import { useState } from "react";

export const Acumulador = () => {
  //Hook state
  const [valor, setValor] = useState(0);

  //Función para aumentar y disminuir el acumulador
  const acumulador = (numero: number) => {
    setValor(valor + numero);
  }

  return (
    <div>
        <h4>Ejercicio 7</h4>
        <h5><b>Enunciado: </b>Empleando el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)</h5>
        <h5>Desarrollo:</h5>
        <p>Acumulador: {valor}</p>
        <button 
            className='btn btn-primary'
            onClick={() => acumulador(5)}>+5</button>
        &nbsp;
        <button 
            className='btn btn-primary'
            onClick={() => acumulador(-5)}>-5</button>
    </div>
  )
}
