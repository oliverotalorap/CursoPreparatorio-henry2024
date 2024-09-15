console.log("Ejercicio H-8 funcion con callbank-forEach")

// let arreglo8 = ["hola", "mundo", "como", "estan"]
// function callback(elem, indice, array) {
//    console.log(elem);
//    console.log(indice);
//    console.log(array);
// }
// let resultado8 = arreglo8.forEach(callback );

console.log("Ejercicio I-9 funcion con callbank-reduce")

let arreglo9 = ["hola", "mundo", "como", "estan"]
function callback(acumulador, elem, indice, array) {
  return acumulador + elem;
}
let resultado9 = arreglo9.reduce(callback);
//let resultado9 = arreglo9.reduce(callback, "-");

console.log(resultado9)

