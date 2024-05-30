
export const AreaCuadrado = () => {

  //Función para calcular el área
  const calcularArea = (lado: number) => {
    return lado ** 2
  }

  return (
    <div>
        <h4>Ejercicio 1</h4>
        <h5><b>Enunciado: </b>Crear una función con parámetros que permita calcular el área de un cuadrado.</h5>
        <h5>Desarrollo:</h5>
        <p>El área de un cuadrado de lado 8 es: {calcularArea(8)}</p>
    </div>
  )
}
