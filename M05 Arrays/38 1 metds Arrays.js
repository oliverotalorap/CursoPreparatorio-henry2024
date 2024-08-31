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
var existeDali = pintores.includes('Dalí');
 console.log(existeDali);
 console.log(pintores);

console.log(3 + " Ejercicio");
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


console.log("Ejercico 4 split y join.");
// SPLIT
var palabra = 'Henri';
console.log(palabra);

var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

palabraSeparada.pop();
palabraSeparada.push('y');
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);


console.log("Ejercicio 5 forEach y map.");
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
numeros.forEach(num => console.log(num));
numeros.forEach(num => {if (num == 3) (console.log(num))});

var numerosmap = numeros.map(( num ) => {return num + 2});
console.log(numerosmap);

// //console.log(masUno);

//console.log(masUno);
// var cumplenCondicion = numeros.every(( num ) => {return num > 5});
// console.log(cumplenCondicion);

