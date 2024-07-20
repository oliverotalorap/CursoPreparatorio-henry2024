console.log("C7-Arrays Ejercicio 01" + " devolverPrimerElemento");
function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
console.log(devolverPrimerElemento([2, 3, 4, 5, 6,'uno', 33, 7]));


console.log("C7-Arrays Ejercicio 02"+ " devolverUltimoElemento");
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
   
   const ultimoElemento = array.length -1;
   return array[ultimoElemento];
}
console.log(devolverUltimoElemento([1, 2, 3, 4, 5, 6, 22, "Edison"]));


console.log("C7-Arrays Ejercicio 03"+ " obtenerLargoDelArray" );
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   console.log(array);
   return array.length;
}
console.log(obtenerLargoDelArray([1, 2, 3, 4, 'hola', 6, 'Eje-3',8]));


console.log("C7-Arrays Ejercicio 04"+ " agregarItemAlFinalDelArray");
function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   console.log(array);
   array.push('elemento', elemento, 'ocho');
   return array;
}
console.log(agregarItemAlFinalDelArray([1, 2, 3 , 4, 'dia']));


console.log("C7-Arrays Ejercicio "+ 5," agregrItem");
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   console.log(array);
   array.unshift("elementoInicio"); 
   return array;
}
//agregarItemAlComienzoDelArray([4, 5, 'seis']);            //estudiar el pq;
console.log(agregarItemAlComienzoDelArray([4, 5, 'seis']));


console.log("C7-Arrays Ejercicio "+ 6 + " -invertirArray-");
let miArreglo = [1, 2, 3, 4, 5, 6, ];
//var miArregloInvertido = miArreglo.reverse();

console.log(miArreglo);  // Salida: [1, 2, 3, 4, 5,]
console.log(miArreglo.reverse());  // Salida: [5, 4, 3, 2, 1]
//console.log(miArregloInvertido);  // Salida: [5, 4, 3, 2, 1]


console.log("C7-Arrays Ejercicio "+ 7 + " -ordenarArray-");
console.log(ordenarArray([1, 8, 4, 2, 'hola', 6, 'Eje-3',3, 4,])); // funciona con [];
console.log(ordenarArray([1, 8, 2, 4, 7, 6, 35, 5, ]));
function ordenarArray(array) {
   // Ordena los elementos del areglo array de menor a mayor.
   // Devuelve el arreglo resultante.
   // Tu código:
   console.log(array);
   return array.sort();
};

console.log("C7-Arrays Ejercicio "+ 8+"A" + " -econtrarElemento-");
console.log(encontrarElemento([1, 8, 4, 2, 'hola', 6, 'Eje-3',3, 4,])); // funciona con [];
console.log(encontrarElemento([1, 8, 2, 4, 7, 6, 5,3, 9, ]));
function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   console.log(num);
   return num.indexOf( 9 );
   return num.indexOf( "hola" );
   //indice = array.indexOf("Eje-3");
   //return indice;
   
   //console.log(array);         //la funcion no corre con el array
   //return array.indexOf( 4 );  //la funcion no corre con el array
}
//module.exports = encontrarElemento;


console.log("C7-Arrays Ejercicio "+ 8+ "B" + " -arrayContiene-");
console.log(arrayContiene([1, 2, 'hola', 4, 'dia',16, 'elemento']));
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código: 
   console.log(array);
   // for(var i = 0; i < array.length; i++){
   //       if (array[i] === 'elemento'){ };
   //       //return true;  
   //       };
   
   var contieneElemento = array.includes("elemento");
   console.log(contieneElemento);
   //return contieneElemento;
   console.log(array.indexOf("elemento"));
   return array.includes("elemento");
};

console.log("C7-Arrays Ejercicio "+ 9 + " -obtenerElementoAleatorio-");
function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   return math.random(array);
};

console.log("C7-Arrays Ejercicio "+ 10 + " -obtenerPrimerStringLargo-");
function obtenerPrimerStringLargo(array) {
   // Devuelve el primer string con más de 5 caracteres en el array.
   // Tu código:
   
 }


console.log("C7-Arrays Ejercicio "+ 11 + " -duplicarElementos-");
console.log("C7-Arrays Ejercicio "+ 12 + " -convertirStringAMayusculas-");
console.log("C7-Arrays Ejercicio "+ 13 + " -filtrarNumerosPares-");


console.log("C7-Arrays Ejercicio "+ 14 + " -contarElementosMayoresA10-");
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo 
   // cuyo valor sea mayor que 18.
   // Tu código:
   var acumulador = []; //0;
   for(let i = 0; i < array.length; i++){
      if(array[i] > 18){
         acumulador++   //- QUE SIGNIFICA "++"
      }
   }
   console.log(array + " Eje #-14 ");
   return acumulador; 
}
console.log(cuentoElementos([1, 200, 3, 33, 4, 456, 876])); //Funciona con []


console.log("C7-Arrays Ejercicio "+ 15 + " -encontrarIndiceMayor-");
console.log("C7-Arrays Ejercicio "+ 16 + " -multiplicarElementosPorIndice-");


console.log("C7-Arrays Ejercicio "+ 17 + " -agregarNumeros-");
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   console.log(arrayOfNums);
   var total = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      total = total + arrayOfNums[i];  //suma += arrayOfNums[i];
   }
   return total;
   //var sumaNumeros = arrayOfNums.reduce((num1, num2) => num1 + num2);
   //return sumaNumeros;
   return (arrayOfNums);
}
console.log(agregarNumeros([1, 2, 3, 4, 10, 20, 30, 40]));


console.log("C7-Arrays Ejercicio "+ 18 + " -promedioResultadosTest-");
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var total = 0;
   for (let i = 0; i < resultadosTest.length; i++ ){
      total = total + resultadosTest[i];
   } 
   return total / resultadosTest.length;
}
console.log(promedioResultadosTest([1, 2, 3, 4, 10, 20, 30, 40]));


console.log("C7-Arrays Ejercicio "+ 19 + " multiplicarArgumentos-");
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0 ) return 0;
   var argMultiplicados = arguments[0]  // let i =1 ¿? en ves de 0.
   for(let i = 1; i < arguments.length; i++ ){
      argMultiplicados = argMultiplicados * arguments[i];
   }
   return argMultiplicados;
}
console.log(multiplicarArgumentos(3, 5, 2, 5, 6)); // -NO LLEVA [] 3, 5, 4, 5, 6


console.log("C7-Arrays Ejercicio "+ 20 + " todosIguales-");
function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   console.log(array);
   
   for (var i =0; i < array.length; i++ ){
      if(array[i] === array[i = 1]) { // Funciona solo con el indice 1 -AlgoFalla;
         return true;}
         else return false;           // - Solo retorna true-
      }

let aux = array[0];
return array.every(elem => elem === aux);
}
console.log(todosIguales([7, 7, 7, 6]));
console.log(todosIguales(["dia", "dia", "tia", "dia"]));


console.log("C7-Arrays Ejercicio "+ 21 + " -mesesDelAño-");
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:;y
   var arrayMesesA = [];
   for(var i =0; i < array.length; i++){
      if(array[i] === "Enero"){arrayMesesA.push(array[i]) }
      if(array[i] === "Marzo"){arrayMesesA.push(array[i])
      }   
   if(array[i] === "Noviembre"){arrayMesesA.push(array[i])
      }     
   } 
   if (arrayMesesA.length === 3) {
      return arrayMesesA;
   } 
return "No se encontraron los meses pedidos";
}
console.log(mesesDelAño(["Octubre", "Marzo", "Julio", "Noviembre", "Enero"]));
console.log(mesesDelAño(["Julio", "Noviembre", "Enero"]));


console.log("C7-Arrays Ejercicio "+ 22 + " -tablaDelSeis-");
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultado = [];
   for(let i = 0; i <= 10; i++){
      resultado.push(i*6);
   }
   return resultado;
}
console.log(tablaDelSeis());


console.log("C7-Arrays Ejercicio "+ 23 + " -breakStatement-");
// romper declaracion.
function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let aux = [];
   let aux2 = false;
   
   for(let i = 0; i < 10; i++) {
      num = num + 2;   // num += 2;
      aux.push(num);

      if(num === i) {
         aux2 = true;
         break; 
      }
   }
   if(aux2) {return "Se interrumpió la ejecución";
   }
   return aux;
}
console.log(breakStatement([0])); // [0] agrega un digito a cada indice
console.log(breakStatement(0));   // funciona solo con ( )
console.log(breakStatement(-3));


console.log("C7-Arrays Ejercicio "+ 24 + " -continueStatement-");
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var aux = [];
   for (let i = 0; i < 10; i++) {
      if(i === 5) { 
         continue;
      }
      num += 2;
      aux.push(num);
   } 
   return aux;
}
console.log(continueStatement(0));


console.log("C7-Arrays Ejercicio "+ 25 + " -contarParesConContinue-");
console.log("C7-Arrays Ejercicio "+ 26 + " -encontrarPrimerMultiploDeN-");


console.log("C7-Arrays Ejercicio "+ 27 + " -dePalabrasAFrase-");
function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:   
   // Tectear Ctrl + KC testra un parrafo.
   
   return palabras.join(" ");  // (' ');
   
   let frase = []; // ""; ("");
   for (let i =0; i< palabras.length; i++ ){
      if(frase == []) {frase = palabras[i] }
      else {frase = frase + " " + palabras[i] }
   }
   return frase;
}
console.log(dePalabrasAFrase(['Hello', 'world!']));



console.log("C7-Arrays Ejercicio "+ 28 + " -esArrayNoVacio-");
console.log("C7-Arrays Ejercicio "+ 29 + " -encontrarNumeroFaltante-");
console.log("C7-Arrays Ejercicio "+ 30 + " -encontrarElementoRepetido-");
console.log("C7-Arrays Ejercicio "+ 31 + " -invertirTexto-");
console.log("C7-Arrays Ejercicio "+ 32 + " -esPalindromo-");
console.log("C7-Arrays Ejercicio "+ 33 + " -combine(str1, str2, str3)-");


console.log("Henry-2023 Ejercicio "+ 34 + " ");
function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   console.log(array + " 4to-Ejer");
   
   const arrayIncrementar = [];
   for(let i = 0; i < array.length; i++){
      arrayIncrementar.push(array[i] + 1) } // +2; *2;
      return (arrayIncrementar + " 4to-Ejer");  //.forEach  //return array;-retorna el array sin cambios-
      
      var incremento = array.map(num => num +1); // num++ (i++?)
      return incremento;
   }
   console.log(incrementarPorUno([1, 2, 3, 4, 5 , 6, "dia"]));
   

console.log("Henry-2023 Ejercicio "+ 35 + " ");
console.log(11 +" Ejercicio" + "-Explicacion-");
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   console.log(arrayOfNums); //retorna todos los ementos.
   var numGrande = arrayOfNums[0];
   for (let i = 0; i < arrayOfNums.length; i++){
      if (numGrande < arrayOfNums[i]){
         numGrande = arrayOfNums[i];
      }
   }
   return numGrande;
}
console.log(numeroMasGrande([303, 2, 103, 0, 10, 20, 300, 40]));


console.log("Henry-2023 Ejercicio "+ 36 + " ");
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se6 codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia < 1 || numeroDeDia > 7) return "Error -Repasar";
   if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
   //if(numeroDeDia === 1) return "Es fin de semana";
   //if(numeroDeDia === 7) return "Es fin de semana";
   return "Es dia laboral";
} 
console.log(diaDeLaSemana(3)); // no funciona con []
console.log(diaDeLaSemana(7)); // no funciona con []
console.log(diaDeLaSemana(8)); // no funciona con []
console.log(diaDeLaSemana(-4)); // no funciona con []


console.log("Henry-2023 Ejercicio "+ 37 + " ");
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   //return num[0] === 9;
   console.log(num + "  Eje-15");
   
   num = num.toString(); //
   if(num[0] === '9'){ 
      return true
   }
   return false;
   
   var str = num.toString(); // str
   return str[0] === "9";
   
   var aux =num.toString().charAt(0);
   if(parceInt(aux) === "9"){
      return true 
   }
   else { return false}
}
console.log(empiezaConNueve([98, 8, 4, 5, 6, 19, 30]));


console.log("Henry-2023 Ejercicio "+ 38 + " ");
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   //return array.filter(elem => elem > 100);

   var nuevo =[]
   for (var i = 0; i < array.length; i++)
   if(array[i] > 100){
      nuevo.push(array[i])
   }
   return nuevo;
}
console.log(mayorACien([0, 108, 100, 101, 3, 4, 105, 109, 120, 30]));
