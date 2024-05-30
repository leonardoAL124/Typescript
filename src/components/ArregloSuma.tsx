
export const ArregloSuma = () => {

  //Función que suma los números de un arreglo
  const sumaElementos = (arreglo: number[]) => {
    let acumulador: number = 0;

    for (let i = 0; i < arreglo.length; i++) {
      acumulador += arreglo[i];
    }

    return acumulador;
  }

  //Arreglo de prueba
  const numeros: number[] = [5, 6, 7, 8];

  return (
    <div>
        <h4>Ejercicio 2</h4>
        <h5><b>Enunciado: </b>Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo.</h5>
        <h5>Desarrollo:</h5>
        <p>La suma de los números es: {sumaElementos(numeros)}</p>
    </div>
  )
}
