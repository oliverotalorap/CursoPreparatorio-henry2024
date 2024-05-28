// var frutas[5] = 'fresa'
// console.log(frutas[5])           // 'fresa'
// console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
// console.log(frutas.length)       // 6

console.log(1 + ' A Ejem');
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2


console.log(1 + ' B Ejem');
let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria', 'Repollo']
console.log(vegetales)

// let elementoEliminado = vegetales.splice(2);

let pos = 3, numElementos = 1;
let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
