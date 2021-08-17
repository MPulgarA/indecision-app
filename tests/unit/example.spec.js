// Nombre del testsuit (conjunto de pruebas), y la función
// usualmente el nombre que va dentro del describe es el del elemento a someter a test
describe('Example component', ()=>{
  // Dentro de esta funcion se ejecutaran todas las pruebas relacionadas al elemento seleccionado
  // El primer argumento del test es una breve descripción de lo que realizara la prueba
  // Funcion que puede ser asincrona
  // las test se pueden escribir tantas como uno desee y su objetivo es evaluaciónes pequeñas
  test('Debe ser mayor a 10', () => {
    // Arreglar
    let value = 5;
    
    // Estimulo
    value = value + 2;
    
    // Observar el resultado
    if(value>10){
      // TODO Todo bien
    }else{
      // TODO Disparar errors
      throw `${value} no es mayor a 10`;
    }

  })
  
})