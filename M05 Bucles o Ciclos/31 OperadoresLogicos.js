//AND
console.log("Ejercicio-1")
function mayorYMenorYPar(num) {
  if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false); 
  }
  // mayorYMenorYPar(9);
  mayorYMenorYPar(7); 
  mayorYMenorYPar(8); 
    
  console.log("Ejercicio-2, Disyuncion (or=||) ")
  // OR
  function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false); }

      operadorOr('Henry');
      operadorOr('Javascript');
      operadorOr('H');
    
    //NOT
    console.log("Ejercicio-3, Funcion negacion  (not= !).")
    function negacionSalida(salida) {
      if (!salida ) console.log('Tiene salida'); 
   
    }
    
    negacionSalida(false); 
    negacionSalida(true); 
    negacionSalida("Beto");

  
    console.log("Ejercicio-4 con not")
    function negacion(permiso) {
      if (permiso == true) console.log('Tiene permiso'); 
      else console.log("No tiene permiso");
    }
    negacion(true);
    negacion("Oliver");
      
console.log("Ejercicio-5" + " " + "COMPLEJA")
console.log("Ejercicio-5 COMPLEJA")
function condicionCompleja(num) {
  
  if( num > 9 && num % 2 === 0 || num === 3) console.log(true);
	else console.log(false);
  }
  condicionCompleja(10);
  condicionCompleja(6);
  condicionCompleja(12);
  condicionCompleja(3);
  

console.log("Ejercicio " + (5 + 1) + " " +"Boolean")

1;            // true
0;            // false
-1;           // true
true;         // true
false;        // false
'string'      // true
null;         // false
undefined     // false
Boolean([]);  // true
// para ejecutarlo desde la terminal git-bash con -node-
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean('string'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
