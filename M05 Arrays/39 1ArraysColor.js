console.log("Ejercicio " + (0+1) + " colores")
// Arreglos
var colores = ['amarillo', 'azul'];
//colores.push("rojo");
colores.pop();
colores.unshift("verde", "rosado", "plateado");
colores.shift();
console.log(colores);
console.log(colores.length);


console.log("Ejercicio "+2+ " pintores");
// arreglos de pintores
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');
console.log(existeDali);


console.log("Ejercicio "+3+ " numeros");
// EVERY
var numeros = [ 7, 6, 8, 9];
var cumplenCondicion = numeros.every(( num ) => {return num > 5});
console.log(cumplenCondicion);

//console.log(cumplenCondicion);
//return numeros [numeros.length -1];
