// Lista de compras
console.log(1 + " Ejer")
var listaDeCompras = [];
listaDeCompras[1] = 'Lechuga';
listaDeCompras[0] = 'cebolla';
listaDeCompras[2] = 'ajo';
listaDeCompras[3] = 'Tomates';
listaDeCompras[4] = 'pepino';

console.log(listaDeCompras);
console.log(listaDeCompras.length);
var elementosDelArrays = listaDeCompras[0];
console.log(elementosDelArrays);

console.log(2 + " Ejer")
// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'] //.length;
console.log(nombres);
console.log(nombres.length);

console.log(3 + " Ejer")
// Arreglos
var colores = ['amarillo', 'azul'];
colores.push("rojo");
colores.unshift('verde');
//olores.pop();
colores.shift();
console.log(colores);


console.log(4 + " Ejer");
// arreglos de pintores
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Velázquez');
console.log(existeDali);

console.log(5 + " Ejer");
// EVERY
var numeros = [ 7, 6, 8, 9];
var cumplenCondicion = numeros.every(( num ) => {return num > 5});
console.log(cumplenCondicion);
return numeros [numeros.length -1];
