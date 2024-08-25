console.log(5 + 11); //Suma              precedencia =12.2
console.log(4 - 2);  //Resta             precedencia =12.1
console.log(3 * 1);  //Multiplicacion    precedencia =13,3
console.log(16 / 4); //Divicion          precedencia =13,2
console.log(5 ** 3); //potencia          precedencia =14
console.log(20 % 7); //Resto             precedencia =13,1

//Prueva de presedencia
console.log(4 + 5 * 2 - 7);
console.log( (4 + 5 ) * 2 - 10 );
console.log((4+5)*2-9);
console.log((3+5)*(2-8));
console.log(3+5*(2-8));

console.log(12 + " Ejercicios con negativos");
console.log(-10.5 % 1);
console.log(-10 % 2);
console.log(9.5 % 1);
console.log(9.5 % 2);

console.log("Ejercicio-1")
function esNumeroEntero(numero) {
console.log( numero !== "number")
}
esNumeroEntero(10)

console.log("Ejercicio-2")
console.log(24 % 1 );
console.log(-1212 % 1 );
console.log(121.212 % 1);

console.log("Ejercicio-3")
console.log("toro".length == "burro".length)
console.log("toro".length == "buei".length)
console.log("str1".length == "str2".length)

//return str1.length === str2.length;