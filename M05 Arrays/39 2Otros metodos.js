console.log("Ejercicio " + 1 +" Metodos split y join")
var palabra = "henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
var palabraArreglada = palabraSeparada.join(" ");
var palabraArreglada = palabraSeparada.join("");
var palabraArreglada = palabraSeparada.join('&');
var palabraArreglada = palabraSeparada.join("-");

console.log(palabra);
console.log(palabraSeparada);
console.log(palabraArreglada);
  
console.log("Ejercicio "+2);
var numeros =[1, 2, 3, 4];
numeros.forEach((num) => console.log(num));
//numeros.forEach(num => {if(num === 1) {console.log(num)}});
var masUno = numeros.map((num) => {return num +4});
console.log(masUno);

console.log("Ejercicio "+3);
var frutas = 'fresa'
console.log(frutas)               // 'fresa'
console.log(Object.keys(frutas))  // ['0', '1', '2', '3' '4']
console.log(frutas.length)        // 5



console.log("Ejercicio "+4);
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

console.log("Ejercicio "+5);
let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria', 'Repollo']
console.log(vegetales)

// let elementoEliminado = vegetales.splice(2);

let pos = 3, numElementos = 1;
let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log(vegetales)

//console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
