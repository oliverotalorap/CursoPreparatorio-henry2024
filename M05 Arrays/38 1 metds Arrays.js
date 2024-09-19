console.log(1 + " Ejercicio Array push, unshift")
// Arreglos
var colores = ['amarillo', 'azul'];
//colores.push('rojo');
colores.pop();
colores.unshift('verde');
//colores.shift();
console.log(colores);

// las funciones tienen implisito un -return-
// let resultadoPush = colores.push("todos");
// console.log(resultadoPush);
// console.log(colores);

let resultadoPop = colores.pop();
console.log(resultadoPop);
console.log(colores);

colores.slice(); //Divide un arreglo para agregar elementos
colores.concat(); // concatena o une en -slice-


console.log(2 + " Ejercicio inclidesDAli");
// arreglos de pintores
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
console.log(pintores);

console.log(pintores.includes('Dalí'));
var existeDali = pintores.includes('Dalí');
 console.log(existeDali);

console.log(3 + " Ejercicio numeros.includes +HOLA");
// EVERY
var numeros = [ 7, 6, 8, 9];
console.log(numeros.includes(5));
var cumplenCondicion = numeros.every(num => {return num > 5});
console.log(cumplenCondicion);

numeros.push('HOLA');
// numeros.pop();
numeros.unshift('cuatro');
numeros.shift();
numeros.unshift('uno', '2');
numeros.shift();
// numeros.shift();
console.log(numeros);


// //console.log(masUno);

//console.log(masUno);
// var cumplenCondicion = numeros.every(( num ) => {return num > 5});
// console.log(cumplenCondicion);
