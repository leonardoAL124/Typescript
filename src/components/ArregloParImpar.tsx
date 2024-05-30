
export const ArregloParImpar = () => {

  // Función que cambia los valores del arreglo
  const cambiarValores = (arreglo: number[]) => {

    let arregloCambiado: string[] = arreglo.map(function(num){

      let valorCambiado: string = '';

      if (num % 2 === 0) {
        valorCambiado = 'Par';
      } else {
        valorCambiado = 'Impar';
      }

      return valorCambiado;
    });
    
    return arregloCambiado.join(', ');
  }

  const  numeros = [1,2,3,4];

  return (
    <div>
        <h4>Ejercicio 4</h4>
        <h5>
            <b>Enunciado: </b>
            Del siguiente arreglo identificar si el número es par o impar. Se solicita generar un nuevo arreglo que remplace el número por las palabras correspondiente:
	          <ol>
                <li>Si es número par, colocar par</li>
                <li>Si es número impar, colocar impar</li>
            </ol>
            const  numeros = [1,2,3,4]
        </h5>
        <h5>Desarrollo:</h5>
        <p>El arreglo con los valores divididos es: {cambiarValores(numeros)}</p>
    </div>
  )
}
