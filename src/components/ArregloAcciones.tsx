
export const ArregloAcciones = () => {

  // Función para realizar las acciones de determinar el texto más largo y calcular las operaciones
  const acciones = (arreglo: (number | string)[]) => {

    let texto: string = '';
    let tamTexto: number = 0;
    let suma: number = 0; 
    let resta: number = 0; 
    let mult: number = 1;
    let div: number = 1;
    let potencia: number = 2;

    for (let i = 0; i < arreglo.length; i++) {

      if (typeof arreglo[i] === 'string') {
        if (tamTexto < String(arreglo[i]).length) {
          tamTexto = String(arreglo[i]).length;
          texto = String(arreglo[i]);
        }
      } else {
        suma += Number(arreglo[i]);
        resta -= Number(arreglo[i]);
        mult *= Number(arreglo[i]);
        div /= Number(arreglo[i]);
        potencia **= Number(arreglo[i]);
      }
      
    }

    return 'El texto mayor es: ' + texto + '. Los resultados de las operaciones son: Suma = '
    + suma + ', Resta = '+ resta + ', Multiplicación = '+ mult +', División = '+ div +', Potencia = '+ potencia;
  }

  const datos: (number | string)[] = [7, 5, "sistemas", "hola", "adios", 2];

  return (
    <div>
        <h4>Ejercicio 5</h4>
        <h5>
            <b>Enunciado: </b>
            A partir del siguiente array que se proporciona ejecutar las siguientes acciones: const datos= [7, 5, “sistemas”, "hola", "adios", 2];
	          <ol>
                <li>Determinar cuál de los tres datos de texto es mayor</li>
                <li>Determinar el resultado de las cinco operaciones matemáticas realizadas con los tres datos numéricos</li>
            </ol>
        </h5>
        <h5>Desarrollo:</h5>
        <p>{acciones(datos)}</p>
    </div>
  )
}
