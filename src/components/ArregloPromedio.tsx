
interface Alumno {
  name: string,
  edad: number,
  calificacion: number,
}

export const ArregloPromedio = () => {

  // Función para calcular el promedio total de todos los alumnos
  const calcularPromedio = (arreglo: Alumno[]) => {

    let acum: number = 0;
    let promedio: number = 0;
    let cantidad: number = arreglo.length;

    for (let i = 0; i < arreglo.length; i++) {
      acum += arreglo[i].calificacion;
    }

    promedio = acum / cantidad;

    return promedio;
  }

  // Arreglo - Alumno
  const alumnos: Alumno[] = [
    {
        name: 'Viviana',
        edad: 19,
        calificacion: 10,
    },
    {
        name: 'Wendy',
        edad: 20,
        calificacion: 8,
    },
    {
        name: 'Gerson',
        edad: 18,
        calificacion: 9,
    }
];


  return (
    <div>
        <h4>Ejercicio 6</h4>
        <h5><b>Enunciado: </b>Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.</h5>
        <h5>Desarrollo:</h5>
        <p>El promedio es: {calcularPromedio(alumnos)}</p>
    </div>
  )
}
