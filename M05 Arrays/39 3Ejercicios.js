console.log("Ejercicio " + (0.5 + 0.5) )
var listaDeCompras = [];
listaDeCompras[1] = 'Lechuga';
listaDeCompras[4] = 'ajo';
listaDeCompras[2] = 'cebolla';
listaDeCompras[3] = "Tomates";
listaDeCompras[0] = "pepino";
console.log(listaDeCompras);
console.log(listaDeCompras.length);
console.log(listaDeCompras[4]);

console.log("Ejercicio " + (1+1)+ " metodos" ); // Arreglos
var colores = ['amarillo', 'azul'];
//colores.push("rojo");
colores.pop();
colores.unshift("verde", "cafe", "blanco", 1, 2 ,3 );
colores.shift();

colores.forEach((num) => console.log(num));
console.log(colores);
console.log(colores.length);

colores.forEach(num => {if(num === "cafe") {console.log(num)}});
//colores.forEach(num => {if(num === "negro") {console.log(num)}});
var masUno = colores.map((num) => {return num +1}); console.log(masUno);
var coloresJoin = colores.join(""); console.log(coloresJoin);
var existe2 = colores.includes("amarillo"); console.log(existe2);
var existe2 = colores.includes( 2 ); console.log(existe2); 
console.log(colores[5]);
var cumplenCondicion = colores.every(( num ) => {return num <5});
console.log(cumplenCondicion);

//console.log(cumplenCondicion);
//console.log(cumplenCondicion);
console.log(cumplenCondicion);
