console.log("C7-Arrays Ejercicio 01" + " devolverPrimerElemento");
function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
   //return array[0];
}
console.log(devolverPrimerElemento([11, 2, 3, 4, 5, 6,'uno', 7]));


console.log("C7-Arrays Ejercicio 02"+ " devolverUltimoElemento");
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   //return array[array.length -1];

   const ultimoElemento = array.length -1;
   return array[ultimoElemento];
   //return array[ultimoElemento];
}
console.log(devolverUltimoElemento([1, 2, 3, 4, 22, "Edison", "He"]));


console.log("C7-Arrays Ejercicio 03"+ " obtenerLargoDelArray" );
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   console.log(array);
   console.log(array.length);
   return array.length;       // -console.log- y -returner- Hacen lo mismo
}
console.log(obtenerLargoDelArray([1, 2, 3, 4, 'hola', 6, 'Eje-3',8]));


console.log("C7-Arrays Ejercicio 04"+ " agregarItemAlFinalDelArray");
function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   console.log(array);
   //console.log(array.push('elemento', 'ElementoF'));// 
   array.push('ElementoF', "demasElementos");
   console.log(array);
   return array;
}
console.log(agregarItemAlFinalDelArray([1, 2, 3 , 4, 'dia', 5]));


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
agregarItemAlComienzoDelArray(["A", 2, 'tres']);            //estudiar el pq;
//console.log(agregarItemAlComienzoDelArray([4, 5, 'seis']));


console.log("C7-Arrays Ejercicio "+ 6 + " -invertirArray-");
function invertirArray(array) {
   // Invierte el arreglo array recibido por argumento.
   // Tu código:
   console.log(array);  // Salida: [1, 2, 3, 4, 5, 6, 7]
   
   console.log(array.reverse());  // Salida: [7, 6, 5, 4, 3, 2, 1]
};
invertirArray(array = [1, 2, 3, 4, 5, 6, 7]);  
invertirArray(array = (["uno", "dos", "tres", 4, "cinco"]));  
//invertirArray([1, 2, 3, 4, 5, 6, 7]);  

console.log("C7-Arrays Ejercicio "+ 7 + " -ordenarArray-");
ordenarArray(array = [23, 8, 234, 4, 2, 'hola', 6, 'Eje',3, 4,]); // funciona con [];
//console.log(ordenarArray([1, 8, 2, 4, 3, 345, 6, 35, 5, ]));
function ordenarArray(array) {
   // Ordena los elementos del areglo array de menor a mayor.
   // Devuelve el arreglo resultante.
   // Tu código:
   //return array.sort();    //NO LO RETORNA

   console.log(array);
   console.log(array.sort());

   array.sort(function(a, b) {return a-b });
   console.log(array);
   //console.log(array.sort(function(a, b) {return a-b })); //En una 2 lineas de codigo.-
   //console.log(array.sort(function(a, b) {console.log(a-b) })); //NO FUNCIONA DESCARTADA
};


console.log("C7-Arrays Ejercicio "+ 8+"A" + " -econtrarElemento-");
//console.log(encontrarElemento(3, [ ]));          
console.log(encontrarElemento([1, 7, 5, 2, 'bay', 6, 'Etc',3, 4], 10)); // funciona con [];
//console.log(encontrarElemento(4, [1, 7, 5, 2, 'bay', 6, 'Etc',3, 4])); // funciona con [];
function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el 
   //que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   console.log(num, array);
 
   // for (let i = 0; i< array.length; i++) {
   //    if (array[i] === num) return i
   // };
   //   return -1                      // pasa en el Homework, PERO NO PASA EN MI ESCRITORIO

   console.log(num.indexOf(6));
   //return num.indexOf(5);
    
   return num.indexOf("bay"); // 2 lineas en una
   // indice = num.indexOf("bay");
   // return indice;
}; 
  

console.log("C7-Arrays Ejercicio "+ 8+ "B" + " -arrayContiene-");
//console.log(arrayContiene([8, "pais", 'haw',2, 4, 'dia',6, 'rei']));
arrayContiene([8, "pais", 'haw',2, 4, 'dia',6, 'rei',10], "tia", 10, "mes");
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código: 
      console.log(array, elemento);

   // for(var i = 0; i < array.length; i=i+1){ 
   //          // if (array[i] === 'ha') console.log(true);  
   //          // else console.log(false);
   //          // VERIFICAR QUE SALGA UN SOLO FALSE
   //          if (array[i] === 'haw') console.log("i= "+ array.indexOf("haw")) ;  
   //          if (array[i] === 'haw') console.log(true);  
   //          if (array[i] === 'haw') console.log(array[i]);  
   //          //else console.log("No es haw, El elemento es =" + array[i]);
   //    else console.log("i= "+array.indexOf(array[i])+" E#= "+array.indexOf(array[i+1])+" N'E= " +array[i]);
   // };  

      var contieneElemento = array.includes("dia");
      console.log(contieneElemento);

      console.log(array.indexOf(4));
      //return array.includes("rei");    // FUNCIONA con el console.log().
};
   
   console.log("C7-Arrays Ejercicio "+ 9 + " -obtenerElementoAleatorio-");
   //console.log(obtenerElementoAleatorio(["perro", "gato", "cui", "loro", "león"]));
   //obtenerElementoAleatorio(array = [1, 2, 3, 4, 5, 6, 7, 8, 9]); // no funciona el -return-
   console.log(obtenerElementoAleatorio([1, 2, "tres", 4, 5, 6, 7, 8, 9]));
   function obtenerElementoAleatorio(array) {
      // Devuelve un elemento aleatorio del arreglo array.
      // PISTA: Usa el método Math.random().
      // Tu código:
      console.log(array);        // Elemento ALEATORIO es variante

      // console.log(array[Math.floor(Math.random() * array.length)]);
      // return array[Math.floor(Math.random() * array.length)];
   
      let indiceAleatorio = Math.floor(Math.random() * array.length);
      let elementoAleatorio = array[indiceAleatorio];
      return elementoAleatorio;     //FUNCIONAN CON EL console.log(...)
   };
    
   console.log("C7-Arrays Ejercicio "+ 10 + " -obtenerPrimerStringLargo-");
   //obtenerPrimerStringLargo([10, "tr", 2, 'hola', 4, 'dia', 1, 'elemento']);
   //console.log(obtenerPrimerStringLargo(["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"]));
   obtenerPrimerStringLargo(["un", "dos", "tres", 8, "cinco", "seis", "siete", "cuatro"]);
   function obtenerPrimerStringLargo(array) {
      // Devuelve el primer string con más de 5 caracteres en el array.
      // Tu código:
      console.log(array);
      
      // let arregloDeCinco = array.filter( function(string) {
      //    if (string.length >= 5) return string; 
      //  } );
      //  console.log(arregloDeCinco);
      //  console.log(arregloDeCinco[0]);
      //  return arregloDeCinco[0];          // Funciona solo con ayuda del -console.log-

      // const primerStringLargo = array.find(function(elemento) {
      //    return elemento.length >= 5; });
      // console.log(primerStringLargo);
   
      array[0];
      for (let i =0; i < array.length; i=i+1) 
      if (array[i].length > 5) { array.push(array[i].length > 5) 
         console.log(array[i]); };
       // pasa enescritorio con >; en Homework pasa con >=.

      
      // for(let i = 0; i < array.length; i=i+1){
      //    if (array[i].length >= 5) return array[i]; 
      //    console.log(array[i]);                 //NO FUNCIONO, 
      //  };

         // function callback(elemento) {
         //      if (elemento > 5 ) return elemento;
         //      return array.length > 5;  };

};
   
   
   console.log("C7-Arrays Ejercicio "+ 11 + " -duplicarElementos-");
   duplicarElementos([3, 5, 2, 4, 6]);
   function duplicarElementos(array) {
      // Duplica (multiplica x2) cada elemento del array de números.
      // Devuelve un array con los duplicados.
      // Tu código:
      console.log(array); 
      //console.log(array.length); 
      
      // let nuevoArreglo = array.map( function(elemento) {
      //    return elemento * 2;
      //  });
      //  console.log(nuevoArreglo);
      //  return nuevoArreglo;

      // const duplicarElementos = [];
      // for(let i = 0; i < array.length; i=i+1){
      // duplicarElementos.push(array[i] * 2 ) }
      // console.log(duplicarElementos); 
         
      var incremento = array.map(num => num * 2);
      console.log(incremento); 
      console.log(array.length);
      console.log(array.length * 3);
   };
      

console.log("C7-Arrays Ejercicio "+ 12 + " -convertirStringAMayusculas-");
convertirStringAMayusculas(["dia", "tia", "papa", "beto", "mama"]);
function convertirStringAMayusculas(array) {
   // Convierte a mayúsculas todos los strings del array.
   // Retorna el arreglo resultante.
   // Tu código:
   console.log(array);

   // const arrayEnMayusculas = array.map(function(elemento) {
   //    return elemento.toUpperCase();  // Convierte cada elemento a mayúsculas
   //    });
   //    console.log(arrayEnMayusculas);
   //    //return arrayEnMayusculas; // funciona con el -console.log-

      //const nuevoArray = [];
      //var nuevoArray = [];
      let nuevoArray = [];
      for(let i = 0; i < array.length; i++){
        nuevoArray.push(array[i].toUpperCase())
      };
      console.log(nuevoArray);

 };

console.log("C7-Arrays Ejercicio "+ 13 + " -filtrarNumerosPares-");
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ]));
function filtrarNumerosPares(array) {
   // Devuelve un arreglo solo con los números pares presentes en el array.
   // Tu código:
   console.log(array);

   // if (array % 2 === 0) return array;          // no filtro.
   // if (array % 2 === 0) console.log(array); // no filtro

   var nuevo =[];
    for (var i = 0; i < array.length; i=i+1)
    if(array[i] % 2 == 0){ 
      nuevo.push(array[i])  
      //console.log(nuevo.push(array[i])); // Funciona en una sola linea de texto
      console.log(nuevo);      // Muestra una escalera donde hace ejercicio por Ejercico
   };

   //console.log(nuevo);
   return nuevo;        // Si no se utiiza retorna -Undefine_ 
 };
 

console.log("C7-Arrays Ejercicio "+ 14 + " -contarElementosMayoresA10-");
//console.log(cuentoElementos([1, 17, 200, 3, 33, 4, 456, 876])); 
cuentoElementos([1, 17, 200, 3, 33, 4, 456, 876, 11]); 
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo 
   // cuyo valor sea mayor que 10.
   // Tu código:
   console.log(array);

let contador = [];
//array.forEach(element => {if (element > 10) {contador++
array.forEach(function(elemento,) {if (elemento > 10) {contador++
}; });
//return contador;     //funciona con el -console.log()-

console.log(contador);
//console.log(indice);
console.log("Estudiar como sacar los elementos");


   // var nuevo =[];
   // for (var i = 0; i < array.length; i++)
   //    if(array[i] > 10){ nuevo.push(array[i])
   //    };
   // console.log(nuevo.length);
   // console.log(nuevo);
   // //return nuevo;
};
//Funciona con []

console.log("C7-Arrays Ejercicio "+ 15 + " A -encontrarIndiceMayor-");
//console.log(encontrarIndiceMayorA([2, 3, 20, 50, 4, 5, 99, 98])); 
encontrarIndiceMayorA([2, 3, 20, 50, 4, 5, 99, 98, 101]); 
function encontrarIndiceMayorA(array) {
   // Encuentra el índice del número más grande en el array de números.
   // Devuelve el valor de este índice.      // Tu código:
 console.log(array);

//  let numeroMayor = array[0];
//  let indiceMayor = 0;
//  array.forEach(function(numero, indice) {
//    if (numero > numeroMayor) {numeroMayor = numero;
//      indiceMayor = indice;
//  } });
//  console.log(indiceMayor+ " indexMy");  
//  console.log(numeroMayor);  
//  return indiceMayor;          //funciona con -console.log()- 

// let numeroMaror = array[0];
// let indiceMayor = 0;
// for (let i = 0; i < array.length; i++) {
//  if (array[i] > numeroMaror) {numeroMaror = array[i]
//   //indiceMayor = indice;
//  } };
//  return indiceMayor;  
// console.log("NO PASO EL HOMEWORK Estudiar Ejercicio");


 const maxNumero = Math.max(...array);
 const indiceMax = array.indexOf(maxNumero);
 console.log(indiceMax + " valor indice");
 console.log(maxNumero);
 return indiceMax;         // Retorna con -console.log()-


};

console.log("C7-Arrays Ejercicio "+ 15 + " B -encontrarNumeroMayor-"); 
encontrarIndiceMayor([ 19, 600, 569, 45, 601, 568, 544]); 
function encontrarIndiceMayor(array) {
   // Encuentra el índice del número más grande en el array de números.
   // Devuelve el valor de este índice.      // Tu código:
 console.log(array);

//  var numGrande = array[0];
//  for (let i = 0; i < array.length; i++){
//     if (numGrande < array[i]) {numGrande = array[i]; };
//    }; 
//    console.log(indiceMax = array.indexOf(numGrande));
//    console.log(numGrande);
//    //   Analisar para sacar el indiceMayor


// let numeroMayor = array[0];
// let indiceMayor = 0;
// array.forEach(function(numero, indice) {
//   //if (numero > numeroMaror) {
//   if (numero > numeroMayor) {
//     numeroMayor = numero;
//     indiceMayor = indice;
// } });
// console.log(indiceMayor + " Es el i-mayor");  
// console.log(numeroMayor + " Es # mayor");  
// return indiceMayor;  

 array.forEach(function (elemento, indice){     
    console.log(indice, elemento);  // Muestra Indices y Elemntos.
   });

};


console.log("C7-Arrays Ejercicio "+ 16 + " -multiplicarElementosPorIndice-");
//multiplicarElementosPorIndice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(multiplicarElementosPorIndice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
function multiplicarElementosPorIndice(array) {
   // Multiplica cada elemento del array por su índice.
   // Devuelve el nuevo arreglo con los resultados.
   // Tu código:
 console.log(array);
 console.log(array.length + " Elementos");

//  let nuevoArreglo = array.map(function(numero, indice) {
//    return numero * indice;
//  });
//  return nuevoArreglo

const porIndice = [];
for(let i = 0; i < array.length; i=i+1){
porIndice.push(array[i] * porIndice.length) 
};
console.log(porIndice);
return porIndice;

};

console.log("C7-Arrays Ejercicio "+ 17 + " -agregarNumeros-");
console.log(agregarNumeros([0, 5, 10, 15, 25, 30, 35, 40]));
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   console.log(arrayOfNums);
   
   // let sumaTodo = arrayOfNums.reduce(function(acum, numero) {
   //    return acum + numero;
   //  });
   //  return sumaTodo;

   // var total = 0;
   // for (let i = 0; i < arrayOfNums.length; i++) {
   //    total = total + arrayOfNums[i];
   // };
   // console.log(total);
   // //return total;

   var sumaNumeros = arrayOfNums.reduce((num1, num2) => num1 + num2);
   console.log(sumaNumeros);  // Pasa nesesito explicacion.
   return sumaNumeros;  // Pasa nesesito explicacion.
};


console.log("C7-Arrays Ejercicio "+ 18 + " -promedioResultadosTest-");
console.log(promedioResultadosTest([0, 5, 10, 15, 25, 30, 35, 40]));
//promedioResultadosTest([0, 5, 10, 15, 25, 30, 35, 40]);
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y 
   //devuelve el promedio de las notas.
   // Tu código:
   console.log(resultadosTest);


   // let promedioTest = resultadosTest.reduce(function(acum, numero) {
   //    return acum + numero;
   //  });
   //  return promedioTest / resultadosTest.length;

   var total = 0;
   for (let i = 0; i < resultadosTest.length; i++ ){
      total = total + resultadosTest[i];
   } 
   console.log(total / resultadosTest.length);
   return total / resultadosTest.length;
};


console.log("C7-Arrays Ejercicio "+ 19 + " multiplicarArgumentos-");
console.log(multiplicarArgumentos(2,3,4,5,6,7)); 
//multiplicarArgumentos(3, 5, 2, 5, 6); // -NO LLEVA [] 3, 5, 4, 5, 6
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar 
   //todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. 
   //Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
console.log(arguments);
//return arguments;

if(arguments.length === 0 ) return 0;
if(arguments.length === 1 ) return arguments[0];
let  multiplicacion = 1; 
for(let i = 0; i < arguments.length; i++ ){
  multiplicacion = multiplicacion * arguments[i];
};
 return multiplicacion;

 if(arguments.length === 0 ) return 0;
 var argMultiplicados = arguments[0]  // let i =1 ¿? en ves de 0.
 for(let i = 1; i < arguments.length; i++ ){
   argMultiplicados = argMultiplicados * arguments[i];
 };
  return argMultiplicados;

};


console.log("C7-Arrays Ejercicio "+ 20 + " todosIguales-");
function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   console.log(array);
   
// let primerValor = array[0];
// let resultado = array.every( function(numero) {
//   if(numero === primerValor) {
//     return true;
//   } else return false;
// });
// return resultado;

// let aux = array[0];
// return array.every(elem => elem === aux);

   // Funciona solo con el indice 1 -AlgoFalla;
   for (var i =0; i < array.length; i++ ){
      if(array[i] === array[i = 1]) { 
         return true; }
         else return false;  
         // pasa el Homework, PERO NO PASA EN ESCRITORIO
      };


};
console.log(todosIguales([7, 8, 7, 7]));
console.log(todosIguales(["dia", "dia", "tia", "dia"]));


console.log("C7-Arrays Ejercicio "+ 21 + " -mesesDelAño-");
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. 
   // Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y 
   // retornarlo.
   // Si alguno de los meses no está, retornar el string: "No 
   // se encontraron los meses pedidos".
   // Tu código:
   console.log(array);

   let mesesFiltrados = array.filter( function (mes) {
      if ( mes === "Enero" || mes === "Marzo" || mes === "Noviembre"){
         return mes;  };
   })
   if( mesesFiltrados.length === 3) return mesesFiltrados;
   else return "No se encontraron los meses pedidos";

   var arrayMesesA = [];
   for(var i =0; i < array.length; i++){
      if(array[i] === "Enero"){arrayMesesA.push(array[i]) }
      if(array[i] === "Marzo"){arrayMesesA.push(array[i]) }   
   if(array[i] === "Noviembre"){arrayMesesA.push(array[i]) };     
   };
   if (arrayMesesA.length === 3) {return arrayMesesA; } 
      return "No se encontraron los meses pedidos";
};
console.log(mesesDelAño(["Octubre", "Marzo", "Julio",
    "Noviembre", "Enero"]));
console.log(mesesDelAño(["Julio", "Noviembre", "Enero"]));


console.log("C7-Arrays Ejercicio "+ 22 + " -tablaDelSeis-");
console.log(tablaDelSeis());   //tablaDelSeis();
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
//console-log(array); // no funciona pq se rea la funcion

const resultado = [];
//var resultado = [];
//let resultado = [];
   for(let i = 0; i <= 10; i++){
      resultado.push(i*6);
   };
   console.log(resultado);
   return resultado;
}


console.log("C7-Arrays Ejercicio "+ 23 + " -breakStatement = romper declaracion");
console.log(breakStatement(0));   // funciona solo con ( )
//console.log(breakStatement(-3));
function breakStatement(num) {      
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   // console.log(num); // No funciona pq se crea el bucle.

   let array = [];
   for (let i = 0; i < 10; i++) { num = num + 2;
     if ( num === i) {return "Se interrumpió la ejecución" 
     }; array.push(num)
   }
   return array; 

   //let aux2 = [];
   //for(let i = 0; i < 10; i=i+1) { num = num + 2;   // num += 2;
   let aux = [];
   //let aux2 = false;  //Al Ejecutar muestra -undefined-; pero pasa el womework C7-Eje23
   //let aux2 = [];     //NO PASA EL HOMEWORK, pero pada en el escritorio
   let aux2 = 0;  
   for(let i = 0; i < 10; i++) { num += 2;   // num = num + 2;
      aux.push(num);
      if(num === i) { aux2 = true;
         break; }; 
      };
      if(aux2) {return "Se interrumpió la ejecución"; };
      //console.log(aux);
      return aux;
};
   
   
console.log("C7-Arrays Ejercicio "+ 24 + " -continueStatement-");
console.log(continueStatement([0])); // [0] agrega un digito a cada indice
//console.log(continueStatement(0));
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   console.log(num);

   let array = [];
   for (let i = 0; i < 10; i++) { 
     if ( i === 5) continue; 
     num = num + 2;
     array.push(num)
   };
   return array;  // Ejercicios Camilo Pineda

   //for (let i = 0; i < 10; i=i+1) { if(i === 5) { continue; }; num += 2;
   //for (let i = 0; i < 10; i=i+1) { if(i === 5 || i=== 8) continue; num += 2;
   var aux = [];
   for (let i = 0; i < 10; i=i+1) { if(i === 5) continue; num = num +2;
      aux.push(num); }; 
   console.log(aux);
   //return aux;
};


console.log("C7-Arrays Ejercicio "+ 25 + " -contarParesConContinue-");
//console.log(contarParesConContinue([0, 5, 10, 15, 25, 30, 35, 40]));
contarParesConContinue([0, 5, 10, 15, 25, 30, 35, 40]); //[] son los que asimilan el push;
function contarParesConContinue(numeros) {
   // La función recibe un array de numeros por argumento.
   // Devuelve la cantidad de números pares que hay en el array.
   // Evita los impares utilizando continue.
   // Tu código:
   console.log(numeros)
   
   
  let cantidadPares = 0;
  for (let i=0; i < numeros.length; i=i+1) {
     if(numeros[i] % 2 === 0) cantidadPares++
     else continue;
  };
  return cantidadPares;  //Ejemplos Camilo Pineda
   
   //losPares.push(i); // se muestran los indices
   //for (let i=0; i < numeros.length; i=i+1) {if(numeros[i] % 2 === 1) continue;
   //let contador = [];
   let contador = 0;
   for (let i=0; i < numeros.length; i=i+1) {
      if(numeros[i] % 2 !== 0) {continue; }
      contador++;
      
      //contador=contador+1;
    
      //contador.push(numeros[i] + 2);
      //console.log(contador);
   };
   console.log(contador);
   console.log(numeros.length);
 };


console.log("C7-Arrays Ejercicio "+ 26 + " -encontrarPrimerMultiploDeN-");
//encontrarPrimerMultiploDeN([4], [5, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
console.log(encontrarPrimerMultiploDeN([4], [ 7, 10, 11, 12, 13, 14, 15, 17, 18]));
function encontrarPrimerMultiploDeN(n, secuencia) {
   // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
   // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
   // Usa un break para detener el bucle una vez halles el múltiplo.
   // Tu código:
   console.log(n, secuencia);

   let multiplo = undefined;
   for (let i = 0; i < secuencia.length; i++) {
     if (secuencia[i] % n === 0) {
       multiplo = secuencia[i]
       break; 
   }  };
 return multiplo; //Ejemplos Camilo Pineda 30 -/ 76 de 79?


   //multiploN.push(i);    // sube los indices de los numeros
   for (let i = 0; i < secuencia.length; i++) {
      if (secuencia[i] % n === 0) {             //break; -bloquea y pasa null-
         console.log(secuencia[i]);
         return secuencia[i];  // Devolve el primer múltiplo encontrado
         break;  // Detene el bucle (opcional después del return)
      }; 
   };
   console.log(null);  // Si no encontramos ningún múltiplo
   return null;  // Si no encontramos ningún múltiplo

      // var multiploN = [];
      // for (let i = 0; i < secuencia.length; i=i+1) {
      //    if (secuencia[i] % n == 0) {
      //       console.log(multiploN[i]); 
      //        multiploN.push(secuencia[i]); 
      //       }; };    
// NO PASO en el HomeWork, pero si paso en mis Ensayos
 };

console.log("C7-Arrays Ejercicio "+ 27 + " dePalabrasAFrase");
function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:   
   // Textear Ctrl + KC testra un parrafo.
   
   
   // let texto = palabras.reduce(function(acum, palabras){
   //    return acum + " " + palabras
   // });
   // return texto;
   
   return palabras.join(" ");  // (' ');      // .join es una solucion

   let frase = []; 
   for (let i =0; i< palabras.length; i++ ){
      if(frase == []) {frase = palabras[i] }
      else {frase = frase + " " + palabras[i] }
   }
   console.log(frase);
   //return frase;
   // el Bucle FOR pasa en mi plantilla; PERO NO PASA EN EL WOMEWORK
}
//dePalabrasAFrase(['Hello', 'world!']);
console.log(dePalabrasAFrase(['Hello', 'world!']));


console.log("C7-Arrays Ejercicio "+ 28 + " -esArrayNoVacio-");
//console.log(esArrayNoVacio([5, 10, 15, 25, 30, 35]));
//console.log(esArrayNoVacio([8]));
console.log(esArrayNoVacio([]));

function esArrayNoVacio(arr) {
   // La función recibe un argumento "arr".
   // Comprueba si este argumento es un array y si tiene al menos un elemento.
   // Si es así, retorna true, de lo contrario, retorna false.
   // Tu código:
   console.log(arr);

   if (Array.isArray(arr) && arr.length > 0) { console.log(true);
      //return true;  // Si es un arreglo y no está vacío, retornamos true
    } else {console.log(false);  
    //} else {return false;  //} else {return false;  // Si no es un arreglo o está vacío, retornamos false
    };
   };


console.log("C7-Arrays Ejercicio "+ 29 + " -encontrarNumeroFaltante-");
//encontrarNumeroFaltante([0, 1, 2, 3, 4, 5, 6, 7, 8,  9, 11, 12, 13, 14]);
//console.log(encontrarNumeroFaltante([]));
console.log(encontrarNumeroFaltante([5, 6, 7, 8,  9, 11, 12, 13]));
function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
   console.log(numeros);

if (numeros.length === 0) return null; 
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] + 1 !== numeros[i + 1] ) return numeros[i] + 1;
  };
  return null; //Ejemplos Camilo Pineda 

   if (numeros.length === 0) {return null; }; // Si el arreglo está vacío, devolvemos null
    for (let i = 0; i < numeros.length - 1; i++) {
      if (numeros[i + 1] - numeros[i] > 1) {
        return numeros[i] + 1;  // Retornamos el número faltante
   } };
    return null;  // Si no encontramos un número faltante, devolvemos null
};


console.log("C7-Arrays Ejercicio "+ 30 + " -encontrarElementoRepetido-");
console.log(encontrarElementoRepetido([1, 3, 2, 4, 5, 6, 7, 8, 11, 2, 5, 13]));
//console.log(encontrarElementoRepetido([]));
function encontrarElementoRepetido(numeros) {
   // La función recibe un argumento "numeros" que es un array de números.
   // Retorna el primer elemento repetido que se encuentre en el array.
   // Tu código:
   console.log(numeros);

   for (let i = 0; i < numeros.length; i++) {
      for (let j = i+1; j <numeros.length; j++) {
        if (numeros[i] === numeros[j]) return numeros[i];    
    } };


   const numerosVistos = new Set();  // Creamos un Set para almacenar números vistos
   for (let i = 0; i < numeros.length; i++) {
     if (numerosVistos.has(numeros[i])) {return numeros[i]; }  // Si ya hemos visto el número, lo retornamos
     else {numerosVistos.add(numeros[i]); }                   // Si no lo hemos visto, lo agregamos al Set
   };
    //console.log(null);                // No muestra nada.
    //return null;                      // return null; - Boqueaba el HOMEWORK
    // Repasar el Ejercicio NO LO COMPRENDO.

 };


console.log("C7-Arrays Ejercicio "+ 31 + " -invertirTexto-");
//invertirTexto("texto Invertido");
console.log(invertirTexto("texto Invertido"));
//invertirTexto("texto Invertido");
function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   console.log(texto);
   //console.log(texto.reverse[i]);
   //return texto.reverse();
  
   // const caracteres = texto.split('');          // Convertimos el texto en un arreglo de caracteres
   // const caracteresInvertidos = caracteres.reverse();    // Invertimos el arreglo de caracteres
   // const textoInvertido = caracteresInvertidos.join(''); // Unimos los caracteres invertidos en un string
   // return textoInvertido;                                // Retornamos el string invertido
 

   // return texto.split("").reverse().join(""); // por Camilo Pineda


   var palabraSeparada = texto.split("");             //console.log(palabraSeparada);
   var palabraInvertida = palabraSeparada.reverse();  //console.log(palabraInvertida);
   var palabraUnida = palabraInvertida.join("") 
   console.log(palabraUnida);
   return palabraUnida;
   
 };


console.log("C7-Arrays Ejercicio "+ 32 + " -esPalindromo-");
console.log(esPalindromo('a man a plan a canal panama'));
//console.log(esPalindromo('Hola'));
function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
console.log(string);
//console.log(string.split());

// Normalizamos el string: convertimos a minúsculas y eliminamos caracteres no alfanuméricos
string = string.toLowerCase().replace(/[^a-z0-9]/g, '');     
const stringInvertido = string.split('').reverse().join(''); // Invertimos el string
console.log(string) === stringInvertido;                     // Comparamos string original con el invertido
return string === stringInvertido;

return string.split("").reverse().join(""); // por Camilo Pineda
console.log(string);                      // HACE FALTA IGUALARLO Y DEBOLVEERLO
return string;                   // PENDIENTE SACARLO EN PANTALLA

// if(string.split("").reverse().join("") === string)
//    //console.log(string)
//    return true;
// else return false;
// //Ejercicio Camilo Pineda -(SALE EN ESCITORIO pero pasa el HomeWork

  // paso: analisar la estructira de la funcion,
};


console.log("C7-Arrays Ejercicio "+ 33 + " -combine(str1, str2, str3)-");
//console.log(combine(["abc"], [12345], [89])); //NO PASA
console.log(combine("abc", "12345", "89"));     // PASA, sin los [ ]-Braques
function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   // Tu código:
 console.log(str1, str2, str3);

//console.log(combine(str1, str2, str3));    // NO PASA, REPITE MUCHAS VESES
//return combine(str1, str2, str3);          // NO PASA, REPITE MUCHAS VESES

//  const maxLength = Math.max(str1.length, str2.length, str3.length);  // Determinamos la longitud máxima
//  let resultado = '';                               // String donde combinaremos los caracteres
//  for (let i = 0; i < maxLength; i++) { 
//    if (i < str1.length) { resultado += str1[i]; }  // Agregamos el carácter de str1 si existe.
//    if (i < str2.length) { resultado += str2[i]; }  // Agregamos el carácter de str2 si existe.
//    if (i < str3.length) { resultado += str3[i]; }  // Agregamos el carácter de str3 si existe.
// };
//    console.log(resultado);                         // Retornamos el string combinado.
//    return resultado;  // Retornamos el string combinado

let lengthMasLargo = Math.max(str1.length, str2.length, str3.length)
let stringFinal = ""
for ( let i = 0; i< lengthMasLargo; i++) {
if ( str1[i]) stringFinal = stringFinal + str1[i]
if ( str2[i]) stringFinal = stringFinal + str2[i]
if ( str3[i]) stringFinal = stringFinal + str3[i]
};
//console.log(stringFinal);     // Ejercicio Camilo Pineda
return stringFinal;           // Ejercicio Camilo Pineda

};
// const resultado1 = combine("abc", "", "123");
// console.log(resultado1);  // Imprime "a1b2c3"
//const resultado3 = combine("abc", "12345", "89");     //-¡IMPRIME SOLO PQ?-
//console.log(resultado3);  // Imprime "a18b29c345"


console.log ("Ejercicios Extras de 34 al 38" )
console.log ("Ejercicios Extras de 34 al 38" )


console.log("Henry-2023 Ejercicio "+ 34 + " incrementarPorUno");
function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   console.log(array);

   // var incremento = array.map(num => num +1); // num++ (i++?)
   // return incremento;

   const arrayIncrementar = [];
   for(let i = 0; i < array.length; i++){
      arrayIncrementar.push(array[i] + 1) } // +2; *2;
      return arrayIncrementar;  //.forEach  //return array;-retorna el array sin cambios-
       
   };
   console.log(incrementarPorUno([1, 2, 3, 4, 5 , 6, "dia", "tia"]));
   

console.log("Henry-2023 Ejercicio "+ 35 + " numeroMasGrande");
console.log(numeroMasGrande([303, 2, 103, 0, 10, 20, 300, 4, 0]));
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   console.log(arrayOfNums); //retorna todos los ementos.

   var numGrande = arrayOfNums[0];
   for (let i = 0; i < arrayOfNums.length; i++){
      if (numGrande < arrayOfNums[i]){
         numGrande = arrayOfNums[i];
      };
   };
   console.log(numGrande);
   return numGrande;
};


console.log("Henry-2023 Ejercicio "+ 36 + " diaDeLaSemana");
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia < 1 || numeroDeDia > 7) return "Error colocar numero del 1 al 7";
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
   console.log(num + "  Eje-37 Empieza con 9");
   
   num = num.toString(); //
   if(num[0] === '9') { return true };
   return false;
   
   var str = num.toString(); // str
   return str[0] === "9";
   
   // var aux =num.toString().charAt(0);
   // if(parceInt(aux) === "9") { return true }
   // else { return false};                        // NO PASA, NO ENTIENDO
}
//console.log(empiezaConNueve([8, 98, 8, 4, 5, 6, 19, 30]));
console.log(empiezaConNueve([98, 8, 4, 5, 6, 19, 30]));


console.log("Henry-2023 Ejercicio "+ 38 + " mayorACien");
//console.log(mayorACien([0, 108, 100, 101, 3, 4, 105, 109, 120, 30]));
mayorACien([0, 120, 100, 110, 3, 4, 160, 150, 130, 30]);
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   console.log(array);

   //return array.filter(elem => elem > 100);

   var nuevo =[];
   for (var i = 0; i < array.length; i++)
   if(array[i] > 100) {nuevo.push(array[i])
   };
   console.log(nuevo);
   console.log(nuevo.reverse());

   console.log(nuevo.sort(function(a, b) {return a-b }));
   nuevo.sort(function(a, b) {return a-b });             //Retorna el resultado sin return.
   //console.log(nuevo);
   //return nuevo;
};
