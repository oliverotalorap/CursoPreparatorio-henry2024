// ar suma = 0;
// suma = suma +1;    
// suma = suma +2;
// suma = suma +3;
// suma = suma +4;

// console.log(suma);

// for (var i=0 ; i<5 ; i++) {
//    suma = suma +i;
// console.log('Variable de iteración: ', i); }
// console.log('Variable suma: ', suma);

var suma = 0;
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);  }
 console.log('Variable suma: ', suma);

var suma = 0;
while(suma < 3) {
    suma = suma + 1; 
    console.log(suma);};

console.log(3 + " Ejer");
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
