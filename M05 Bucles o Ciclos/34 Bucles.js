console.log("Ejercicio " + (0.5 + 0.5) +" Bucle For");
 var suma = 0;
 suma = suma +1;    
// suma = suma +2;
// suma = suma +3;
 suma = suma +4;
// suma = suma +5;
 console.log(suma);


console.log("Ejercicio " + (0 + 2 + "  i++ = i=i+1/5/10") )  
//var suma = 0;
for (var i=0 ; i <5; i++) {  
    suma = suma +1;
    //console.log(i);
    console.log(i +" Variable de iteracion");
}
console.log(suma + " variable suma");
    
// Curso de introduccion a la programacion por Camilo Pineda Colombiano -Enlaces 
//https://youtu.be/MWZA-eQJONs
//https://youtu.be/MWZA-eQJONs?list=PL-6w-c2LFJ3Bm6unSrIfpfmPAzcB7zkzD
//Curso de Introducción a la Programación | Clase 6: Bucles - ¿Cómo automatizar tareas repetitivas?

console.log("Ejercicio " + (0 + 3) + " Bucle for /para, por" )
var suma = 0;
for (let i = 0;  i<5; i++) {
    suma = suma + i;
    //    console.log(i);  
    console.log(i + ' Variable de iteración: ');     
}
console.log(suma);
console.log(suma + "  Variable suma");


console.log("Ejercicio " + (0 + 3 + "B") + " Bucle for /para, por" )
var total = 0;                              // var para sumar-A.
for (let i = 0; i <= 100; i = i+20 ) {
    console.log(i +"  Variable d itr")
    total = total + i;                      // var para sumar-B. Suma
}
console.log(total + "  Variable TTL");      // var para sumar-C

console.log("Ejercicio " + (4 ) + " Bucle While /ciclo mientras" )
var resultado = 0;
var i = 0;
while ( i <= 100 ) {
    console.log(i + "  variable iter");
    i= i+25
    resultado = resultado + i;
}
console.log(resultado + "  Variable resultado");    
//console.log(i + "  Variable Total no aplica suma 76+25");    


console.log("Ejercicio " + (0 + 5) + " Bucle While /ciclo mientras" )
var suma = 0;
while(suma <= 4) {
    suma = suma + 1; 
    console.log(suma);
};
console.log(suma + "  Variable suma las iteraciones");
//console.log(i); // NO APLICA NO HAY "i"


console.log("Ejercicio " + (0 + 6 +" esNumeroPrimo") )
function esPrimo(num) {
        // Retornar true si "num" es primo.
        // De lo contrario retorna false.
        // Tu código:
    //if(num<2) return "false"; 
    //if(num<2) console.log("false"); 
    //if(num<2) console.log(false); 
    for (var i = 2; i < num; i++) {
        if (num % i === 0) console.log(false); // colsole.log x return
    }
console.log (true);
} 
//esPrimo(7);
esPrimo(6);
//esPrimo(-4);

//esPrimo(47 + "  retirna 47 veses el true");
// no aplica o sale el Ejercicio

console.log("Ejercicio " + (7 +" esNumPrimo") )
function esNumPrimo(num) {
        // Retornar true si "num" es primo.
        // De lo contrario retorna false.
        // Tu código:
 if (num % 2 == 0) console.log(false);
 else if (num % 3 == 0) console.log(false);
 else if (num % 5 == 0) console.log(false);
 else if (num % 7 == 0) console.log(false);
  else console.log(true);
}  
esNumPrimo(5);
esNumPrimo(9); 
esNumPrimo(47);

