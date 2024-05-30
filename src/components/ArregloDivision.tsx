
export const ArregloDivision = () => {

  // Función que divide para cinco los valores de un arreglo
  const dividirValores = (arreglo: number[]) => {

    let arregloDividido: number[] = arreglo.map(function(num){
      return num / 5;
    });
    
    return arregloDividido.join(', ');
  }

  // Arreglo de prueba
  const arreglo: number[] = [5,10,15,20,25,30,35,40,45,50]

  return (
    <div>
        <h4>Ejercicio 3</h4>
        <h5><b>Enunciado: </b>Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5. const arreglo = [5,10,15,20,25,30,35,40,45,50]</h5>
        <h5>Desarrollo:</h5>
        <p>El arreglo con los valores divididos es: {dividirValores(arreglo)}</p>
    </div>
  )
}
