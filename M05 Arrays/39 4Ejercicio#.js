console.log("Ejercicio " + (1+1)+ " metodos" ); // Arreglos

var numeros = [ 3, 4,];
numeros.push(5, 6);
numeros.pop();
numeros.unshift( 1, 2);
numeros.shift();
numeros.forEach((num) => console.log(num));
console.log(numeros);
console.log(numeros.length);

numeros.forEach(num => {if(num === 2) {console.log(num)}});
numeros.forEach(num => {if(num !== 7) {console.log(false)}}); //-si no esta no muestra el Elemento 
numeros.forEach(num => {if(num !== 7) {console.log(num)}}); //-si no esta no muestra el Elemento 
var numerosJoin = numeros.join(""); console.log(numerosJoin);
var masCinco = numeros.map((num) => {return num +5}); console.log(masCinco);
var existe2 = numeros.includes( 2 ); console.log(existe2); 
var existe2 = numeros.includes("amarillo"); console.log(existe2);
console.log("salto de linea") 


console.log(numeros[0]);
console.log(numeros[3]);
var cumplenCondicion = numeros.every(( num ) => {return num <6});
console.log(cumplenCondicion);
var cumplenCondicion = numeros.every(( num ) => {return num >2});
console.log(cumplenCondicion); 

