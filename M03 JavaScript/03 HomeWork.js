/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
    // La función recibe un entero. Devuelve como resultado un string que indica si el número
    // es positivo o negativo.
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
//     if(num > 0) return "Es positivo";
//     else if(num < 0) return "Es negativo"; 
//     else if (num === 0) return false;
//     esPositivo(0); 
// }
if (num > 0) {console.log("Es positivo");}
else if(num < 0) {console.log("Es negativo");}
else if(num === 0) {console.log(false);}
}
esPositivo(0);

console.log(2+ "Ejer");
function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final del string "str" y retórnalo
    // Ejemplo: "hello world" ---> "hello world!"
    // Tu código:
    // return str + "!"; - NO FUNCIONA-
    console.log(str + "!");
    console.log((str) + "!");
 }
agregarSimboloExclamacion("Hola mundo");

function combinarNombres(nombre, apellido) {
    // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
    // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
    // Tu código:
    console.log(nombre,  apellido);
    return nombre + " " + apellido;
    
 }
console.log(combinarNombres("Oliver", "Porras"));

function obtenerSaludo(nombre) {
    // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
    // Ejemplo: "Martin" ---> "Hola Martin!"
    // Tu código:
    console.log("Hola " + nombre +"!");
    console.log("Hola "+nombre+"!");
    // return "Hola " + nombre + "!";
    return "Hola "+nombre+"!";
 }
 console.log(obtenerSaludo("Pedro"));

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el área de un rectángulo teniendo su altura y ancho.
    // Tu código:
    return alto * ancho;
 }
 console.log(obtenerAreaRectangulo(4, 4));

function retornarPerimetro(lado) {
    // La función recibe como argumento la medida de un lado de un cuadrado.
    // Debes retornar su perímetro.
    // Tu código:
    return lado * 4;
 }
 console.log(retornarPerimetro(5));

function areaDelTriangulo(base, altura) {
    // Calcula el área de un triángulo y retorna el resultado.
    // Tu código:
    // return (base * altura) / 2; 
    return base * altura / 2; 
 }
 console.log(areaDelTriangulo(5, 4));

function deEuroAdolar(euro) {
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // Debes calcular el valor recibido como argumento pasándolo a dolares.
    // Tu código:
    return euro * 1.20 + " " + "dolares";
 }
 console.log(deEuroAdolar(4));

 console.log(9+ " Ejer");
 function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") 
   {return "Es vocal";}
   else {return "Dato incorecto";}
   // return "Dato incorecto";
   // else if(letra.length > 1) {return "Dato incorecto";}
}
  esVocal("a"); // DEVE COLOCARSE LAS COMILLAS-
  esVocal("e");
  esVocal("i");
  esVocal("xd");
  esVocal("O");
  esVocal("u");
  esVocal("+");
//03-Ejercio para guardar