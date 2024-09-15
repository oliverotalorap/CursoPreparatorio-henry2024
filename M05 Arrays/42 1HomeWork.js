console.log("C7-Arrays Ejercicio 01" + " devolverPrimerElemento");
function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
console.log(devolverPrimerElemento([2, 3, 4, 5, 6,'uno', 7]));


console.log("C7-Arrays Ejercicio 02"+ " devolverUltimoElemento");
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
   
   const ultimoElemento = array.length -1;
   return array[ultimoElemento];
}
console.log(devolverUltimoElemento([1, 2, 3, 4, 22, "Edison"]));


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
   //console.log(array.push('elemento', 'ElementoF'));// 
   array.push('elemento', 'ElementoF');
   console.log(array);
   return array;
}
console.log(agregarItemAlFinalDelArray([1, 2, 3 , 4, 'dia']));


console.log("C7-Arrays Ejercicio "+ 5," agregarItemAlComienzotem");
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   console.log(array);
   array.unshift("elementoInicio"); 
   console.log(array);
   return array;
}
agregarItemAlComienzoDelArray([4, 5, 'seis']);            //estudiar el pq;
//console.log(agregarItemAlComienzoDelArray([4, 5, 'seis']));


console.log("C7-Arrays Ejercicio "+ 6 + " -invertirArray-");
function invertirArray(array) {
   // Invierte el arreglo array recibido por argumento.
   // Tu código:
   //let nvertirArray = [1, 2, 3, 4, 5, 6, 7,];
   
   console.log(array);  // Salida: [1, 2, 3, 4, 5, 6, 7]
   console.log(array.reverse());  // Salida: [7, 6, 5, 4, 3, 2, 1]
};
invertirArray(array = [1, 2, 3, 4, 5, 6, 7]);  
invertirArray(array = (["uno", "dos", "tres", "cinco"]));  
//invertirArray([1, 2, 3, 4, 5, 6, 7]);  

console.log("C7-Arrays Ejercicio "+ 7 + " -ordenarArray-");
//console.log(ordenarArray([24, 8, 234, 4, 2, 'hola', 6, 'Eje',3, 4,])); 
//ordenarArray([24, 8, 234, 4, 2, 'hola', 6, 'Eje',3, 4,]); // funciona con [];
ordenarArray(array = [24, 8, 234, 4, 2, 'hola', 6, 'Eje',3, 4,]); // funciona con [];
//console.log(ordenarArray([1, 8, 2, 4, 3, 345, 6, 35, 5, ]));
//ordenarArray(array = [1, 8, 2, 4, 3, 345, 6, 35, 5, ]);
function ordenarArray(array) {
   // Ordena los elementos del areglo array de menor a mayor.
   // Devuelve el arreglo resultante.
   // Tu código:
   console.log(array);
   console.log(array.sort());
   //return array.sort();    //NO LO RETORNA

   //console.log(array.sort(function(a, b) {return a-b })); //En una 2 lineas de codigo.-
   array.sort(function(a, b) {return a-b });
   console.log(array);
   //console.log(array.sort(function(a, b) {console.log(a-b) })); //NO FUNCIONA DESCARTADA
};


console.log("C7-Arrays Ejercicio "+ 8+"A" + " -econtrarElemento-");
//encontrarElemento([1, 8, 4, 2, 'bay', 6, 'Etc',3, 4]);            // no muestra el -1
console.log(encontrarElemento([1, 8, 4, 2, 'bay', 6, 'Etc',3, 4])); // funciona con [];
function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el 
   //que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   console.log(num);
   console.log(num.indexOf(6));
   return num.indexOf( 10 );  // funciona el return y console.log();
   return num.indexOf("bay"); // 2 lineas en una
   indice = num.indexOf("bay");
   return indice;
}; 
  

console.log("C7-Arrays Ejercicio "+ 8+ "B" + " -arrayContiene-");
arrayContiene([8, "pais", 'haw',2, 4, 'dia',16, 'rei']);
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código: 
   console.log(array);
   for(var i = 0; i < array.length; i=i+1){ 
            // if (array[i] === 'ha') console.log(true);  
            // else console.log(false);
            // VERIFICAR QUE SALGA UN SOLO FALSE
            if (array[i] === 'haw') console.log("si");  
            else console.log("no esta");
         };  

      var contieneElemento = array.includes("dia");
      console.log(contieneElemento);
      
      console.log(array.indexOf("rei"));
      return array.includes("rei");    // NO FUNCIONA
};
   
   console.log("C7-Arrays Ejercicio "+ 9 + " -obtenerElementoAleatorio-");
   console.log(obtenerElementoAleatorio([9, "Aleatorio", 2, 'hola', 4, 'dia',16, 'elemento']));
   function obtenerElementoAleatorio(array) {
      // Devuelve un elemento aleatorio del arreglo array.
      // PISTA: Usa el método Math.random().
      // Tu código:
            console.log(array);
            let indiceAleatorio = Math.floor(Math.random() * (array.length));
            let elementoAleatorio = array[indiceAleatorio];
            return elementoAleatorio;    

            //return math.random(array);
            // Explicacion NO ENTIENDO EL EJERCICIO
   };
   
   console.log("C7-Arrays Ejercicio "+ 10 + " -obtenerPrimerStringLargo-");
   //console.log(obtenerPrimerStringLargo([10, "tringLrg", 2, 'hola', 4, 'dia', 1, 'elemento']));
   //let array = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"];
   console.log(obtenerPrimerStringLargo(["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"]));
   function obtenerPrimerStringLargo(array) {
      // Devuelve el primer string con más de 5 caracteres en el array.
      // Tu código:
      console.log(array);
      
      // var largo =array[0];
      // var palabraMasLarga="";
      // for (let i =0; i<String.length; i++) 
      //    if (array[i].length > largo.length)  {
      //    };

      var nuevo =[]
      for (var i = 0; i < array.length; i++)
      if(array[i] > 5){
         nuevo.push(nuevo[i] > 5)
      //   nuevo.push(array[i] > 5)
   };
}
//return nuevo;
   //console.log(largo);
   //console.log(palabraMasLarga);
   
   
   console.log("C7-Arrays Ejercicio "+ 11 + " -duplicarElementos-");
   function duplicarElementos(array) {
      // Duplica (multiplica x2) cada elemento del array de números.
      // Devuelve un array con los duplicados.
      // Tu código:
      console.log(array); 
      
      const duplicarElementos = [];
      for(let i = 0; i < array.length; i++){
      duplicarElementos.push(array[i] * 2 ) }
      console.log(duplicarElementos); 
         
      //var incremento = array.map(num => num * 2);
      //console.log(incremento); 
      //console.log(array.length *2);
   };
   console.log(duplicarElementos([3, 5, 2, 5, 6]));
   

console.log("C7-Arrays Ejercicio "+ 12 + " -convertirStringAMayusculas-");
function convertirStringAMayusculas(array) {
   // Convierte a mayúsculas todos los strings del array.
   // Retorna el arreglo resultante.
   // Tu código:
 
   const pasarAMayusculas = [];
   for(let i = 0; i < array.length; i++){
   pasarAMayusculas.tuUpperCase(array[i] )
   };
   return array.toUpperCase();
   return pasarAMayusculas.toUpperCase; 
 }
// NO PASO

console.log("C7-Arrays Ejercicio "+ 13 + " -filtrarNumerosPares-");
function filtrarNumerosPares(array) {
   // Devuelve un arreglo solo con los números pares presentes en el array.
   // Tu código:
   console.log(array);
   var nuevo =[];
    for (var i = 0; i < array.length; i++)
    if(array[i] % 2 == 0){
      nuevo.push(array[i])
    };
    
    return nuevo;
    //return nuevo.length;
 };
 console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ]));
 

console.log("C7-Arrays Ejercicio "+ 14 + " -contarElementosMayoresA10-");
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo 
   // cuyo valor sea mayor que 10.
   // Tu código:
   console.log(array);

   var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] > 10){
      nuevo.push(array[i])
   };
   console.log(nuevo.length);
   console.log(nuevo);
   return nuevo;
}
console.log(cuentoElementos([1, 17, 200, 3, 33, 4, 456, 876])); 
//Funciona con []

console.log("C7-Arrays Ejercicio "+ 15 + " -encontrarIndiceMayor-");
function encontrarIndiceMayor(array) {
   // Encuentra el índice del número más grande en el array de números.
   // Devuelve el valor de este índice.
   // Tu código:
 
   var nuevo =[];
   for (var i = 0; i < array.length; i=i+1)
     nuevo.push(array.Math.max[i])
      nuevo.push(array[i])
   
   return nuevo;
   // NO PASO EXPLICACION
}

console.log("C7-Arrays Ejercicio "+ 16 + " -multiplicarElementosPorIndice-");
function multiplicarElementosPorIndice(array) {
   // Multiplica cada elemento del array por su índice.
   // Devuelve el nuevo arreglo con los resultados.
   // Tu código:
 
   var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] < array.length ) {
      nuevo.push(array[i])
   };
 
   return nuevo * array.length;
   // NO PASO EXPLICACION
 };

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
   console.log(total);
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
function contarParesConContinue(numeros) {
   // La función recibe un array de numeros por argumento.
   // Devuelve la cantidad de números pares que hay en el array.
   // Evita los impares utilizando continue.
   // Tu código:
 
   if(numeros % 2 == 0) push
   
 };


console.log("C7-Arrays Ejercicio "+ 26 + " -encontrarPrimerMultiploDeN-");
function encontrarPrimerMultiploDeN(n, secuencia) {
   // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
   // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
   // Usa un break para detener el bucle una vez halles el múltiplo.
   // Tu código:
 
   var multiploN = [];
   for (let i = 0; i<= 20; i++) {
     if (i == 12){ break;
     }
   }
 };

console.log("C7-Arrays Ejercicio "+ 27 + " dePalabrasAFrase");
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
function esArrayNoVacio(arr) {
   // La función recibe un argumento "arr".
   // Comprueba si este argumento es un array y si tiene al menos un elemento.
   // Si es así, retorna true, de lo contrario, retorna false.
   // Tu código:
 };


console.log("C7-Arrays Ejercicio "+ 29 + " -encontrarNumeroFaltante-");
function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
};


console.log("C7-Arrays Ejercicio "+ 30 + " -encontrarElementoRepetido-");
function encontrarElementoRepetido(numeros) {
   // La función recibe un argumento "numeros" que es un array de números.
   // Retorna el primer elemento repetido que se encuentre en el array.
   // Tu código:
 };


console.log("C7-Arrays Ejercicio "+ 31 + " -invertirTexto-");
function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
 
   return texto.reverce
 };


console.log("C7-Arrays Ejercicio "+ 32 + " -esPalindromo-");
function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
};


console.log("C7-Arrays Ejercicio "+ 33 + " -combine(str1, str2, str3)-");
function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   // Tu código:
 
 };


console.log("Henry-2023 Ejercicio "+ 34 + " incrementarPorUno");
function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
 
   const arrayIncrementar = [];
   for(let i = 0; i < array.length; i++){
      arrayIncrementar.push(array[i] + 1) } // +2; *2;
      return (arrayIncrementar + " 4to-Ejer");  //.forEach  //return array;-retorna el array sin cambios-
      
      var incremento = array.map(num => num +1); // num++ (i++?)
      return incremento;
   }
   console.log(incrementarPorUno([1, 2, 3, 4, 5 , 6, "dia"]));
   

console.log("Henry-2023 Ejercicio "+ 35 + " umeroMasGrande");
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


console.log("Henry-2023 Ejercicio "+ 36 + " diaDeLaSemana");
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


console.log("Henry-2023 Ejercicio "+ 37 + " empiezaConNueve");
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


console.log("Henry-2023 Ejercicio "+ 38 + " mayorACien");
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   //return array.filter(elem => elem > 100);

   var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] > 100){
      nuevo.push(array[i])
   };
   return nuevo;
}
console.log(mayorACien([0, 108, 100, 101, 3, 4, 105, 109, 120, 30]));
