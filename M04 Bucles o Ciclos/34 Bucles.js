console.log("Ejercicio " + (0.5 + 0.5) +" Bucle For")
//var suma = 0;
// suma = suma +1;    
// suma = suma +2;
// suma = suma +3;
// suma = suma +4;

// console.log(suma);

console.log("Ejercicio " + (1 + 1) )
var suma = 0;
for (var i=0 ; i <5; i++) {
    suma = suma +1;
    console.log(suma);
    }
//console.log(suma);
    
console.log("Ejercicio " + (2 + 1) + " Bucle for /para, por" )
var suma = 0;
for (let i = 0;  i<5; i++) {
    suma = suma + i;
    // console.log('Variable de iteración: '+ i);  
    //console.log(i);  
    }
    // console.log('Variable suma:', suma);
    console.log(suma);
    

console.log("Ejercicio " + (3 + 1) + " Bucle While /ciclo mientras" )
var suma = 0;
while(suma < 3) {
    suma = suma + 1; 
    console.log(suma);
};
  
console.log("Ejercicio " + (4 + 1) )
function esPrimo(num) {
        // Retornar true si "num" es primo.
        // De lo contrario retorna false.
        // Tu código:
    if(num<2) return "false";  // ¡significado de i++?
    for (var i = 2; i < num; i++) {
    if (num % i === 0) return false; // colsole.log x return
    return true;
    }
} 
esPrimo(5);
