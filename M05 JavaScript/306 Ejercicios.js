console.log("JavaScript C-6 Ejercicio " + " 1 nuevoString");
// Crea una variable de tipo string.
// Reemplaza el valor de null por el correspondiente.

const nuevoString = "palabraEntreComillas";
console.log(nuevoString);
{}

console.log("JavaScript C-6 Ejercicio " + " 2 nuevoNumero");
// Crea una variable de tipo number.
// Reemplaza el valor de null por el correspondiente.

const nuevoNumero = 22;
console.log(nuevoNumero);
// number o numero
{}

console.log("JavaScript C-6 Ejercicio " + " 3 nuevoBooleleano");
// Crea una variable de tipo boolean.
// Reemplaza el valor de null por el correspondiente.

const nuevoBoolean = true;
console.log(nuevoBoolean);
// boolean: false o true.
{}

console.log("JavaScript C-6 Ejercicio " + " 4 nuevaResta");
// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.

const nuevaResta = 10 - 7 == 3;

console.log(nuevaResta);  
console.log(10 - 7);
nuevaResta;
{}

console.log("JavaScript C-6 Ejercicio " + " 5 nuevaMultiplicacion");
// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.

const nuevaMultiplicacion = 10 * 4 == 40;
// miltiplicacion.
console.log(10 * 4);
console.log(nuevaMultiplicacion);
nuevaMultiplicacion;
{}

console.log("JavaScript C-6 Ejercicio " + " 6 resto o nuevoModulo");
// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.

const nuevoModulo = 21 % 5 === 1;
console.log(21 % 5);
console.log(nuevoModulo);
//resto o sobrante de una divicion
{}

console.log("JavaScript C-6 Ejercicio " + " 7 esTipoDato");
function esTipoDato(valor) {
    // La función recibe un argumento llamado valor.
    // Retorna el tipo de dato de este valor.
    // Por ejemplo: "string", "number", "boolean", "object", etc.
    // Tu código:
    
    console.log(typeof valor);
        // return typeof valor;
    // let tipoDato = typeof valor;
    // return tipoDato;
    
  }
  esTipoDato( "string");
  esTipoDato( 46);
  esTipoDato( true);
  esTipoDato( );


console.log("JavaScript C-6 Ejercicio " + " 8 esNumeroEntero");
function esNumeroEntero(numero) {
    // La función recibe un argumento llamado numero.
    // Verifica si este es un número entero o no.
    // Retorna false si lo es, de lo contrario, retorna false.
    // Por ejemplo: 
    // 24 ---> true 
    // -1212 ---> true 
    // 121.212 ---> false 
    // Tu código:
      console.log(numero);

    console.log(Number.isInteger(numero));
    // return Number.isInteger(numero);
    // //return numero.isInteger();
    
    // let resultado = Number.isInteger(numero);
    // return resultado;

    // if(numero % 1 == 0) return true; 
    // else return false;
}
esNumeroEntero(5);
esNumeroEntero(-5);
esNumeroEntero(5.5);

console.log("JavaScript C-6 Ejercicio " + " 9 esNuloOIndefinido");
function esNuloOIndefinido(valor) {
    // La función recibe un argumento llamado valor.
    // Si este valor es null o undefined, retorna true.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // null ---> true 
    // undefined ---> true 
    // 22 ---> false
    // "texto" ---> false
    // Tu código:
    console.log(valor);

    if(valor == null){ console.log(true); }
    else if (valor == undefined){console.log(True);} 
    else console.log(false);

    // if(valor == null){ return true; }
    // else if (valor == undefined){ return True;} 
    // else return false;
};
esNuloOIndefinido(null);
esNuloOIndefinido( );
esNuloOIndefinido( 46);
esNuloOIndefinido("palabra");

console.log("JavaScript C-6 Ejercicio " + " 10 devolverString");
function devolverString(string) {
    // La función recibe un argumento llamado string.
    // Debe retornar dicho string.
    // Por ejemplo: 
    // "texto" ---> "texto" 
    // "hola mundo" ---> "hola mundo" 
    // "SoyHenry" ---> "SoyHenry" 
    // Tu código:
   
    console.log(string);
    return string;
}
devolverString("stringOPalabra");

console.log("JavaScript C-6 Ejercicio " + " 11 sonIguales");
function sonIguales(x, y) {
    // La función recibe dos argumentos llamados "x" e "y".
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 5, 5 ---> true 
    // 5, 8 ---> false 
    // Tu código:
  
    if( x == y){console.log(true); }
     else console.log(false);

    if( x == y){ return true; }
     else return false;
}
sonIguales(5, 5);
sonIguales("Hola", "Hola");
sonIguales(5, 4);
sonIguales("Hola", "Hello");

console.log("JavaScript C-6 Ejercicio " + " 12 tienenMismaLongitud");
function tienenMismaLongitud(str1, str2) {
    // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // "SoyHenry", "HenrySoy" ---> true 
    // "hi", "there" ---> false 
    // Tu código:
  console.log(str1, str2);
  console.log(str1 == str2);

    if(str1.length == str2.length) console.log(true);
    else console.log(false);

    if(str1.length == str2.length) return true;
    else return false;
}
//tienenMismaLongitud("toro", "buey");
tienenMismaLongitud(123, 456);

console.log("JavaScript C-6 Ejercicio " + " 13 menosQueNoventa");
function menosQueNoventa(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es menor que noventa.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 50 ---> true
    // 91 ---> false
    // Tu código:
  
    return num < 90;
  
    if(num < 90) return true;
    else return false;
    
    // if(num < 90) {return true; }
    // else return false;
}
menosQueNoventa;

console.log("JavaScript C-6 Ejercicio " + " 14 mayorQueCincuenta");
function mayorQueCincuenta(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es mayor que cincuenta.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 51 ---> true
    // 15 ---> false
    // Tu código:
  
    return num > 50;
    if(num > 50) {
      return true; 
    }
    else return false;
}
mayorQueCincuenta;

console.log("JavaScript C-6 Ejercicio " + " 15 esPar");
function esPar(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es par.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 14 ---> true
    // 15 ---> false
    // Tu código:
  
    return num % 2 == 0;
    if (num % 2 == 0) {return true;
    }
    else return false;
}
esPar;

console.log("JavaScript C-6 Ejercicio " + " 16 esImpar");
function esImpar(num) {
    // La función recibe un argumento llamado num.
    // Retorna true si el argumento "num" es impar.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // 15 ---> true
    // 14 ---> false
    // Tu código:
  
    return num % 2 == 1;
    if (num % 2 == 1) {return true;
    }
    else return false;
}
esImpar;

console.log("JavaScript C-6 Ejercicio " + " 17 esPositivo");
function esPositivo(num) {
    // La función recibe un argumento llamado num el cual es un numero entero.
    // Retorna como resultado un string que indica si el número es positivo o negativo.
    // Por ejemplo: 
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
    if (num > 0) return "Es positivo";
    else if(num < 0) return "Es negativo";
    else return false;
}
esPositivo;

console.log("JavaScript C-6 Ejercicio " + " 18 esVocal");
function esVocal(letra) {
    // La función recibe un argumento llamado letra el cual es un string.
    // Retorna como resultado un string que indica si el argumento letra es una vocal.
    // de lo contrario retorna el string "Dato incorrecto"
    // Por ejemplo: 
    // "a" ---> "Es vocal"
    // "u" ---> "Es vocal"
    // "n" ---> "Dato incorrecto"
    // "texto largo" ---> "Dato incorrecto"
    // Tu código:
  
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
      return "Es vocal";
      }
      else return "Dato incorrecto";
}
esVocal;

console.log("JavaScript C-6 Ejercicio " + " 19 suma");
function suma(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la suma de estos argumentos.
    // Por ejemplo: 
    // 5, 5 ---> 10
    // -5, 5 ---> 0
    // Tu código:
    return x + y;
}
suma; 

console.log("JavaScript C-6 Ejercicio " + " 20 resta");
function resta(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la resta de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 5
    // 5, 5 ---> 0
    // Tu código:
    return x-y;
}
resta;

console.log("JavaScript C-6 Ejercicio " + " 21 multiplicacion");
function multiplica(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la multiplicacion de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 50
    // 5, 5 ---> 25
    // Tu código:
  
    return x * y;
}
multiplica;

console.log("JavaScript C-6 Ejercicio " + " 22 divicion");
function divide(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado de la division de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 2
    // 5, 5 ---> 1
    // Tu código:
    return x/y;
}
divide;

console.log("JavaScript C-6 Ejercicio " + " 23 obtenerResto");
function obtenerResto(x, y) {
    // La función recibe dos argumentos llamados "x" e "y" que son números.
    // Retorna el resultado del resto de la division de estos argumentos.
    // Por ejemplo: 
    // 10, 5 ---> 0
    // 16, 5 ---> 1
    // Tu código:
    return x % y;
}
obtenerResto;

console.log("JavaScript C-6 Ejercicio " + " 24 agregarSimboloExclam");
function agregarSimboloExclamacion(str) {
    // La función recibe un argumento llamado str el cual es un string.
    // Agrega un símbolo de exclamación al final del string str y retórnalo.
    // Por ejemplo: 
    // "hello world" ---> "hello world!"
    // Tu código:
    return str + "!" ;
}
agregarSimboloExclamacion;

console.log("JavaScript C-6 Ejercicio " + " 25 combinarNombre");
function combinarNombres(nombre, apellido) {
    // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
    // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
    // Por ejemplo: 
    // "Soy", "Henry" ---> "Soy Henry"
    // Tu código:
  
    return nombre+ " "+ apellido;
}
combinarNombres;

console.log("JavaScript C-6 Ejercicio " + " 26 obtenerSaludo");
function obtenerSaludo(nombre) {
    // La función recibe un argumento llamado nombre el cual es un string. 
    // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
    // Ejemplo: "Martin" ---> "Hola Martin!"
    // Retorna el nuevo string. 
    // Tu código:
  
    return "Hola"+" "+ nombre+"!";
    return "Hola "+ nombre+"!";
}
obtenerSaludo;

console.log("JavaScript C-6 Ejercicio " + " 27 obtenerAresRectangulo");
function obtenerAreaRectangulo(alto, ancho) {
    // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
    // Retornar el área de un rectángulo teniendo su alto y ancho.
    // Por ejemplo: 
    // 2, 2 ---> 4
    // 0, 2 ---> 2
    // Tu código:
  
    return alto * ancho;
}
obtenerAreaRectangulo;

console.log("JavaScript C-6 Ejercicio " + " 28 retornarPerimeto");
function retornarPerimetro(lado) {
    // La función recibe un argumento llamado lado el cual es un numero.
    // Retornar el perimetro de un cuadrado.
    // Por ejemplo: 
    // 2 ---> 8
    // 0 ---> 0
    // Tu código:
 
    return lado* 4;
}
retornarPerimetro;

console.log("JavaScript C-6 Ejercicio " + " 29 areaDelTriangulo");
function areaDelTriangulo(base, altura) {
    // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
    // Retornar el área de un triangulo teniendo su base y altura.
    // Por ejemplo: 
    // 10, 5 ---> 25
    // 0, 10 ---> 0
    // Tu código:
  
    return (base * altura) /2;
    return base * altura /2;
}
areaDelTriangulo;

console.log("JavaScript C-6 Ejercicio " + " 30 deEuroAdolar");
function deEuroAdolar(euro) {
    // La función recibe un argumento llamado euro el cual es un numero.
    // Debes calcular el valor recibido como argumento pasándolo a dólares.
    // Suponiendo que 1 euro equivale a 1.20 dólares.
    // Retornar el valor en dolares.
    // Por ejemplo: 
    // 1 ---> 1.20
    // 0 ---> 0
    // Tu código:
    
    return euro * 1.20;
}
deEuroAdolar;

console.log("JavaScript C-6 Ejercicio " + " 31 elevarAlCuadrado");
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes Retorna el valor de "num" elevado al cuadrado.
    // Por ejemplo: 
    // 6 ---> 36
    // 0 ---> 0
    // Tu código:
  
    return num ** 2;
  }
  // ⛔️ Recuerda que debes utilizar el objeto global "Math".
  module.exports = elevarAlCuadrado;

console.log("JavaScript C-6 Ejercicio " + " 32 elevarAlCubo");
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes Retorna el valor de "num" elevado al cubo.
    // Por ejemplo: 
    // 3 ---> 27
    // 0 ---> 0
    // Tu código:
  
    return num **3;

}
elevarAlCubo;

console.log("JavaScript C-6 Ejercicio " + " 33 elevar");
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:

  return num ** exponent;
}
elevar;

console.log("JavaScript C-6 Ejercicio " + " 34 redondearNumero");
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes redondear "num" al entero más próximo y retornarlo.
    // Por ejemplo: 
    // 1.5 ---> 2
    // 0.1 ---> 0
    // Tu código:
 
    return Math.round(num);
}
redondearNumero;

console.log("JavaScript C-6 Ejercicio " + " 35 redondearHaciaArriba");
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes redondear "num" hacia arriba y retórnalo.
    // Por ejemplo: 
    // 2.5 ---> 3
    // 0.1 ---> 1
    // Tu código:
  
    return Math.ceil(num);
}
redondearHaciaArriba;

console.log("JavaScript C-6 Ejercicio " + " 36 numeroRandom");
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
    // La función numeroRandom debe generar un número al azar entre 0 y 1 y retornarlo.
    // Tu código:
    return Math.random();
}
numeroRandom;

  // 36 Ejercicios