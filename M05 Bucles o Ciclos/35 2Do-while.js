console.log("Ejercicio A-1  Bucle while");
var i = 1;
while(i < 1) { console.log(i); i= i+1;  };

console.log("Ejercicio B-2  Bucle do-while");
var i = 3;
do{ console.log(i); i++;  
} while(i < 4);

// con do{} while(i<1); el codigo se ejecuta minino 1ves.
console.log("Ejercicio C-3  Bucle while");
var i = 1;
while(i <= 5) { console.log(i); i= i+1; };


console.log("Ejercicio D-4  Bucle do-while");
var i = 0;
do{ console.log(i); i++; } while(i <= 5);


console.log("Ejercicio D-5 -Bucle --for--")
var arr = [1, 2, 3, 4, 5];
  //console.log(arr);
  console.log(arr.reverse());
// for (let i = 0; i <arr.length; i=i+1) {
//    console.log(arr[i]); }
  arr.forEach(function (elemento, indice)
  {console.log(elemento, indice); });

    
console.log("Ejercicio " + (1 +" A") +" DoWhile /HacerMientras" );
//let result = 0;   //suma el total de las iteraciones
let result = '';    //muestra cuantas iteraciones realizo
let e = 0;
do { e = e + 1; result = result + e;
} while (e <= 8);
console.log(result); // Expected output: "12345"

console.log("Ejercicio " + (1 +" B") +" DoWhile /HacerMientras" );
//let result = '';
//let result = "";
let resultado = 0;
var i = 0;
//do { i = i + 1;  result = result + i +" "; }
do { i = i + 1; 
  resultado = resultado + i; 
  console.log(i + "  Variable de iteracion");
}
while (i<=8);
console.log(resultado + "  Variable suma"); // Expected output: "12345"
console.log(i + "  Variable de iteracion T-Pasos");


// do.  sentencia;      while.  (condición);

console.log(2+"-Ejercicio Bucle FOR"); 
var suma = 0;
for (let i = 0; i < 10; i=i+2) {
    suma = suma + i;
    console.log(i+ "  Variable de iteración:");  
  }
  console.log(suma + "  Suma Total");  

  
  console.log(3+" -Ejercicios con do-while");
  function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var i = 0;
    do { num = num + 5; i++; } 
    while (i < 8) 
      console.log(num);
      return num;
  }
  console.log(doWhile(0));

  