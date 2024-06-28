console.log(1 + " Ejercicio")
// Arreglos
var colores = ['amarillo', 'azul'];
colores.push('rojo');
//colores.pop();
colores.unshift('verde');
//colores.shift();
console.log(colores);

console.log(2 + " Ejercicio");
// arreglos de pintores
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');
 console.log(existeDali);
// console.log(pintores);

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


console.log(4 + " Ejer");
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
// console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

console.log(5 + " Ejer");
var numeros = [1, 2, 3, 4];
numeros.forEach(num => console.log(num));
// numeros.forEach(num => {if (num === 3) (console.log(num))});
// console.log(numeros);
var masUno = numeros.map((num) => {return num +1;});
console.log(masUno);

//console.log(masUno);
// var cumplenCondicion = numeros.every(( num ) => {return num > 5});
// console.log(cumplenCondicion);

