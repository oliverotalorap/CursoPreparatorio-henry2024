console.log("Bucles C-6 Ejercicio-1 esIgualYNegativo " );
function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  console.log(a, b);

  // if (a == b && a < 0 && b < 0 ) return true;
  // else return false;

  if (a == b && a < 0 && b < 0 ) console.log (true);
    else console.log(false);
    //Directo:
}
esIgualYNegativo( -4, -4)
esIgualYNegativo( -2, -4)


console.log("Bucles C-6 Ejercicio-2 booleano1 y 2  " );
function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  console.log(booleano1, booleano2);

  //return booleano1 && booleano2;

  // if (booleano1 && booleano2) {return true};
  // return false;
  if (booleano1 == true && booleano2 == true) console.log(true)// return true;
  else console.log(false )//return false;
  //Directo  
  
}
//esVerdaderoYFalso(true, true)
esVerdaderoYFalso(true, false)
// esVerdaderoYFalso(false, true)
// esVerdaderoYFalso(false, false)
//module.exports = esVerdaderoYFalso;

console.log("Bucles C-6 Ejercicio-3 obtenerMayor" );
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  console.log(x, y);

  // if (x == y){return x;}
  // else if (x > y ) {return x; }
  // else return y;                 // se muestra solo con console.log(.);
  // Directo:
       
  if(x>y) console.log(x);
  else if(x<y) console.log(y); 
  else if(x === y) console.log(x); 
  else console.log(y); 
  }
  //obtenerMayor(5, 4);
  obtenerMayor(3+4, 4+2);

console.log("Bucles C-6 Ejercicio-4 mayorDeEdad" );
function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  // if (edad >= 18) {return "Allowed"; }
  // else return "Not allowed";
  if(edad >= 18) console.log("Allowed");
  else console.log("Not allowed");
  // Directo:
}
mayoriaDeEdad(20);
mayoriaDeEdad(17);

console.log("Bucles C-6 Ejercicio-5 esVerdadero" );
function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  console.log(valor);

  //if (valor) return "Soy verdadero" // master
  
  if (valor) console.log("Soy verdadero");
  else console.log("Soy falso");

  if (valor === true) return "Soy verdadero" 
  else return "Soy falso";
  //Se muestra solo con console.log(...);
}
esVerdadero(true);
esVerdadero(false);

console.log("Bucles C-6 Ejercicio-6 tieneTresDigitos" );
function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
 console.log(num);
  if (num <= 999 && num >=100 ) console.log(true);
  else console.log(false);
  //Directo:
}
tieneTresDigitos(100);
tieneTresDigitos(1000);

console.log("Bucles C-6 Ejercicio-7 esparYDivisiblePorTres" );
function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  console.log(a);
  //if (a % 2 == 0 && a % 3 == 0) {return true; }
  //else return false;            // Funciona con el console-log(..);
  
  if (a % 2 == 0 && a % 3 == 0) console.log(true);
  else console.log(false); 
  
}
esParYDivisiblePorTres(12);
esParYDivisiblePorTres(9);
esParYDivisiblePorTres(8);

console.log("Bucles C-6 Ejercicio-8 esPoivoOInferiorA10" );
function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por parámetro.
  // Retorna true si es positivo y menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  console.log(a);

  //if (a >= 0 && a < 10) { return true; } // Se muestra con console.log(..);
  if (a >= 0 && a < 10) console.log(true);
  else console.log(false);
  //
}
esPositivoOInferiorA10(8);
esPositivoOInferiorA10(11);
esPositivoOInferiorA10(-7);

console.log("Bucles C-6 Ejercicio-9 conectionStatus" );
function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
console.log(status);

// switch (status) {
//   case 1: console.log("Online");
//   case 2: console.log("Away");
//   default: console.log("Offline"); };
// NO FUNCIONA EN MI ESRCRITORIO

  if(status === 1) console.log("Online");
  else if(status === 2) console.log("Away");
  else console.log("Offline");
  
} 
conection(1);
conection(2);
conection(4);


console.log("Bucles C-6 Ejercicio-10 esdiesOCinco" );
function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  console.log(num);

  // if (num == 5 || num == 10) {return true; }
  // else return false;

  if(num === 10 || num === 5) console.log(true);
  else console.log(false);
  // DIRECTO:
}
// esDiezOCinco(10);
esDiezOCinco(5);
esDiezOCinco(4);

console.log("Bucles C-6 Ejercicio-11 estaEnRango" );
function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  console.log(num);
  
  // if(num > 20 && num < 50) {return true; }
  // else return false;
  if(num < 50 && num > 20) console.log(true);
  else console.log(false);
  
}
estaEnRango(35);
estaEnRango(19);

console.log("Bucles C-6 Ejercicio-12 fizzBuzz" );
function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  console.log(num);     // -"funciona con console.log"-. 
  
  if (num % 5 == 0 && num % 3 == 0) console.log("fizzbuzz");
  else if (num % 3 == 0) console.log("fizz");
  else if (num % 5 == 0) console.log("buzz");
  else console.log(false);
  //
 }
fizzBuzz(15);
fizzBuzz(12);
fizzBuzz(10);
fizzBuzz(8);


console.log("Bucles C-6 Ejercicio-13 esEntero");
function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código: 
  console.log(num);

  if (num % 1 == 0) console.log(true);
  else console.log(false);

  // return num % 1 === 0;
  // console.log(Number.isInteger(num));    //.isInteger = esEntero
  //console.log(num % 1 === 0);
  // DIRECTO:
}
esEntero(0.5); 
esEntero(3);


console.log("Bucles C-6 Ejercicio-14  operadoresLogicos");
function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  console.log(num1, num2, num3)

  if (num1 > num2 && num1 > num3 && num1 >= 0) console.log("Numero 1 es mayor y positivo");
  else if (num1 < 0 || num2 < 0 || num3 < 0) console.log("Hay negativos");
  else if ( num3 > num1 && num3 > num2) console.log(num3 + 1);
  else if ( num1 == 0 && num2 == 0 && num3 == 0 ) console.log("Error");
  else console.log(false);
  // 
}
operadoresLogicos(30, 20, 10);
operadoresLogicos(15, 20, -10);
operadoresLogicos(40, 50, 60);
operadoresLogicos(0, 0, 0);     
operadoresLogicos(9, 2);     


console.log("Bucles C-6 Ejercicio-15 odtenerDiaSemana");
function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  console.log(numero); 

  // if ( numero == 1 ) console.log("Lunes");
  // else if ( numero == 2 ) console.log("Martes");
  // else if ( numero == 3 ) console.log("Miercoles");
  // else if ( numero == 4 ) console.log("Jueves");
  // else if ( numero == 5 ) console.log("Viernes")
  // else if ( numero == 6 ) console.log("Sabado");
  // else if ( numero == 7 ) console.log("Domingo");
  // else console.log("No es un dia de la semana");
// DIRECTO:
if ( numero == 1 ) console.log("Lunes");
else if ( numero == 2 ) console.log("Martes");
else if ( numero == 3 ) console.log("Miercoles");
else if ( numero == 4 ) console.log("Jueves");
else if ( numero == 5 ) console.log("Viernes");
else if ( numero == 6 ) console.log("Sabado");
else if ( numero == 7 ) console.log("Domingo");
else console.log("No es un dia de la semana");
}
obtenerDiaSemana(0);
obtenerDiaSemana(1);
obtenerDiaSemana(2);
obtenerDiaSemana(3); 
obtenerDiaSemana(4); 
obtenerDiaSemana(5); 
obtenerDiaSemana(6); 
obtenerDiaSemana(7); 
obtenerDiaSemana(8); 


console.log("Bucles C-6 Ejercicio-16 saludo");
function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:

  // switch (idioma) {
  //   case "aleman": return "Guten Tag!"
  //   case "mandarin": return "Ni Hao!"
  //   case "ingles": return "Hello!"
  //   default: return "Hola!"
  // };
     //codigo return -NO LO EJECUTA LA FUNCION?-

    if(idioma === "aleman") console.log("Guten Tag!");
    else if(idioma === "mandarin") console.log("Ni Hao!");
    else if(idioma == "ingles") console.log("Hello!");
    else console.log("Hola!"); 
    //DIRECTO:
};
saludo("aleman");
saludo("mandarin");
saludo("ingles");
saludo("Hola!");


console.log("Bucles C-6 Ejercicio--17 colores");
function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  console.log(color);

// if (color == "blue") console.log("This is blue");
// if (color == "red") console.log("This is red");
// if (color == "green") console.log("This is green");
// if (color == "orange") console.log("This is orange");
// else console.log("Color not found");  

// const colores = {
//   blue: "This is blue",
//       red: "This is red",
//       green: "This is green",
//       orange: "This is orange", };   
//       console.log(colores[color] || "Color not found");

    // Conceptos de objetos y propiedades se aplico arriba
    
  // switch (color) {
  //   case "blue": console.log("This is blue");     break;
  //   case "red": console.log("This is red");       break;
  //   case "green": console.log("This is green");   break;
  //   case "orange": console.log("This is orange"); break;
  //   default: console.log("Color not found");
  //   };                  // SE NESESITA EL -break;-

  //var color ="caje";           // var modula el resultado 
  switch(color){
   case "blue": console.log("This is blue");      break;
   case "red": console.log("This is red");        break;
   case "green": console.log("This is green");    break;
   case "orange": console.log("This is orange");  
   break;
   default: console.log("color not found");} 
};
colors("green"); // se nesesita para que lo muestre en pantalla.

console.log("Bucles C-6 Ejercicio--18 productoEntreNumeros");
function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  console.log(a, b);

  // let producto = 1;
  // for (let i = a; i <= b; i++) {
  //   producto *= i;
  // }
  // console.log(producto === 0 ? 0 : producto);
  // console.log(producto);
  
  var suma = 1;
  for (var i = a; i <= b; i++ ) {
      suma *= i;
      //suma = suma + 1;
    }
    console.log(suma);
    //return suma;
    
  }
  productoEntreNúmeros(2, 4);

console.log("Bucles C-6 Ejercicio--19 sumaHastaN");
function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  console.log(n);

  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma = suma + i;
  }
  console.log(suma); 
  //return suma;      // return no lo muestra en escritorio.
  
}
sumarHastaN(10);

console.log("Bucles C-6 Ejercicio--20 sumaHastaNConBreak");
function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  console.log(n);

  // let suma = 0;
  // for (let i = 1; i <= n; i++) {
  //   if (suma >= 100) break;
  //   suma = suma + i;
  // }
  // console.log(suma);
  //return suma;
  
  var suma = 0;
  for (var i = 1; i <= n; i++) {
      suma = suma + i; 
    if (suma >= 100) break;
    }
    console.log(suma);
  // return suma;
  
  // var i = 1; while (i < n) { if (i == 100) break;  i++; }
  // while (i < n) { if (i == 100) break; i++; }

  // REPASAR Y ESTUDIARLO:
}
sumarHastaNConBreak(20);

console.log("Bucles C-6 Ejercicio--21 esPotenciaDeDos ESTUDIAR");
function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while -(mientres)
  // Tu código:
  console.log(numero);

  while (numero > 1) {
    if (numero % 2 != 0) console.log(false);
    numero = numero / 2;
  };
  console.log(true);
  // return true; // video 7/9 01.18.23
  //ESTUDIAR ESTUDIAR NO ENTENDI

  // if (numero % 2 == 0) console.log(true);
  // else console.log(false);
    // NO FUNCIONA CON return;
};
//esPotenciaDeDos(15);
esPotenciaDeDos(12);


console.log("Bucles C-6 Ejercicio--22 doWhile");
function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  console.log(num);

  var i = 0;
  do { num = num + 5; i++; } 
  while (i < 8) console.log(num);
  

  // // let num = '';
  // let result = '';
  // let i = 0;
  // do { i = i + 1; result = result + i; }
  // while (i<8);
  // console.log(result)
  // console.log(i + " Resultado Total");
  // // console.log(result + " Resultado Total");

 
};
//doWhile(0 );
doWhile(10);


console.log("Bucles C-6 Ejercicio--23 esNumeroPrimo  ESTUDIAR");
function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo  
  // // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
  // [Nota]: los números negativos, 0 y 1 NO son números primos.
  // Tu código:
  console.log(numero);

//if(numero < 2) console.log(false);
// for (var i = 2; i < numero; i++) {
//   if (numero % i === 0) console.log(false); 
// }
// console.log(true);
    //NO PASA EN LA TERMINAL PERO PASA EN EL ESCRITORIO:

    // if (numero % 2 === 0) console.log(false);
    // else if (numero % 3 === 0) console.log(false);
    // else if (numero % 5 === 0) console.log(false);
    // else if (numero % 7 === 0) console.log(false);
    // else console.log(true);
    //PASA EN ESCRITORIO PERO NO PASA EN LA TERMINAL
    
    switch (numero) {
      case numero % 2 === 0: console.log(false); break;
      case numero % 3 === 0: console.log(false); break;
      case numero % 5 === 0: console.log(false); break;
      case numero % 7 === 0: console.log(false); break;
   default: console.log(true);} 
  // NO FUNCIONO
    
  };
  esNumeroPrimo(8);
  esNumeroPrimo(11);