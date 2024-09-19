// Lista de compras
console.log("Ejercicio 1 Arreglos Ejem-verduras")
var listaDeCompras = [];
listaDeCompras[1] = 'Lechuga';
listaDeCompras[4] = 'cebolla';
listaDeCompras[2] = 'ajo';
//listaDeCompras[3] = "Tomates";
listaDeCompras[0] = "pepino";
listaDeCompras[5] = 'Platano';

console.log(listaDeCompras.length);
console.log(listaDeCompras[3]);
 console.log(listaDeCompras);
// var elementosDelArrays = listaDeCompras[0, 1, 2 ];
// console.log(elementosDelArrays);


console.log("Ejercicio " + (1+1) + " Nombres Metodos -incledes y lenght-"  ) 
// Lenght
var nombres = ['Anyi', 'Beto', 'Carlos', 'Dany', "Edwin"]
console.log(nombres);
console.log(nombres.length);
console.log(nombres.includes("Beto"))

console.log("Ejercicio " + (1+2) + " Numeros y every"  ) 
var numeros = [  4, 5, 6,];
console.log(numeros);
var cumpleCondicion = numeros.every((num) => {
    return num > 3; 
    //return num >= 4;
} 
)
console.log(cumpleCondicion);

console.log("Ejercicio " + 4 + " NUMEROS REVERSE"  ) 
let miArreglo = [1, 2, 3, 4, 5, 6,];
//var miArregloInvertido = miArreglo.reverse();

console.log(miArreglo);             // Salida: [1, 2, 3, 4, 5,...]
console.log(miArreglo.reverse());   // Salida: [.., 5, 4, 3, 2, 1]
//console.log(miArregloInvertido);    // Salida: [..., 5, 4, 3, 2, 1]

//Ejercicios
//console.log( (2+2) *4)

console.log("Ejercicio " + 5 + " Nombres y length"  ) 
// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);
//console.log(nombres.length);


console.log("Ejercico 6 split y join.");
// SPLIT
var palabra = 'Henri';
console.log(palabra);

var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

//palabraSeparada.pop();
console.log(palabraSeparada.pop());
palabraSeparada.push('y');
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);


console.log("Ejercicio 7 forEach y map.");
var numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]);
console.log(numeros[4]);
console.log(numeros);

// verificar el forEach con palabras
numeros.forEach(num => console.log(num));
numeros.forEach(num => {if (num == 3) (console.log(num))
    else (console.log("No esta el numero"))
});

var numerosmap = numeros.map((num) => {return num + 2});
console.log(numerosmap);
var numerosmap = numeros.map((num) => {console.log(num + 2)});

console.log("Ejercicio 8 Obtener Elemento e Indice")
let arreglo8 =["hola", "mundo", "feliz", true, 2024];
console.log(arreglo8);
console.log(arreglo8.length + " Elementos");
arreglo8.forEach(function (elemento, indice, Array){
    console.log(elemento, indice);
});

console.log("Ejercicio 9 Array con -sort(ordenar)-strings")
let nombres1 =["maria", "nancy", "bilma", "karla"];
console.log(nombres1);
console.log(nombres1.sort());
nombres1.forEach(function (elemento, indice){
    console.log(elemento, indice);
});


console.log("Ejercicio 10 Array con  -sort(ordenar)-num")
let ordennum =[40, 123, 1, 5, 25, 13];
console.log(ordennum);
console.log(ordennum.sort());

console.log(ordennum.sort(function(a, b) {return a-b }));
ordennum.sort(function(a, b) {return a-b });
console.log(ordennum);

//console.log(ordennum.forEach(function (elemento, indice )));
ordennum.forEach(function (elemento, indice){
    console.log(elemento, indice); });


// Del 1 al 9 Ejercicios Henrry Modulo-7 Array
// del A-1 al H-8 Ejerccicios de practica del ..?

console.log("Ejercicio A-1 clases de Arrays" )
let arreglo1 =[];        //arreglo Basio
let arreglo2 =[123, 456,789, -100];
let arreglo3 =["hola", "mundo", "feliz", "dia", true, 2024];

console.log(arreglo3[3]);
console.log(arreglo3[8]);
console.log(arreglo3.length + " indises");
console.log(arreglo3);

arreglo3[8] = "7moElemento"
console.log(arreglo3[8]);

for(let i = 0; i< arreglo3.length; i++)
    console.log(arreglo3[i]);
console.log(arreglo3.length + " indises");



console.log("Ejercicio B-2 resultado Split")
//let resultadoSplit = "Ejemplo tomamos una palabra".split();
let resultadoSplit = "Ejemplo tomamos una palabra"; // .split("");
console.log(resultadoSplit);
console.log(resultadoSplit.split(" "));


console.log("Ejercicio C-3.     -bucle for")
let arreglo4 =["hola", "mundo", "feliz", "dia", true, 2024];
for(let i = 0; i< arreglo4.length; i++)
    console.log(arreglo4[i]);
console.log(arreglo4.length + " indises");
console.log(arreglo4);


//funciones de colbank
console.log("Ejercicio D-4 funcion con colbank")
function funcion1() { return "Hola"}
function funcion2(nombre, cb){
    return cb() +" "+nombre;
}; 
let resultado = funcion2("Camilo", funcion1)
console.log(resultado);
//function funcion2(nombre, )


// let resultadoDelForEach = arreglo4.forEach(); //solo recorre el for
// let resultadoDelMap = arreglo4.map();       // Elento principales o modificados
// let resultadoDelFilter = arreglo4.filter(); // nuevo con elementos filtrados
// let resultadoDelReduce = arreglo4.reduce(); // unico elemento del arreglo
// textear o comentar.

console.log("Ejercicio E-5 funcion con callbank-forEach")
let arreglo5 =["hola", "mundo", "feliz", true, 2024];
function callback(elem) {
    console.log(elem);
    return elem + "!"
}
let resultado5 = arreglo5.forEach( callback);
console.log(resultado5);


console.log("Ejercicio F-6 funcion con callbank-map")
let arreglo6 =["hola", "mundo", "feliz", true, 2024];
function callback(elem) {
    console.log(elem);
    return elem + "!"
}
let resultado6 = arreglo6.map(callback);
console.log(resultado6);

console.log("Ejercicio G-7 funcion con callbank-filter")
let arreglo7 =["hola", "mundo", "feliz", true, 2024];
function callback(elem) {
    if(elem.length == 5) return elem;
    //if(elem.length == true) return elem;
    //if(elem.length == 2024) return elem;
}
let resultado7 = arreglo7.filter(callback);
//let resultado7 = arreglo7.map(callback);
console.log(resultado7);

console.log("Ejercicio H-8 funcion con callbank-reduce")
console.log("callbank-reduce"+" "+"pasa a 38 1Array reduce")



