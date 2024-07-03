//AND
console.log("Ejercicio-1")
function mayorYMenorYPar(num) {
  if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false); 
  }
  // mayorYMenorYPar(9);

  mayorYMenorYPar(7); 
  mayorYMenorYPar(8); 
    
  // OR
  console.log("Ejercicio-2")
  function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false); }

      operadorOr('Henry');
      operadorOr('Javascript');
      operadorOr('H');
    
    
    // NOT
    console.log("Ejercicio-3 true and false" + "No entendi")
    function negacion(permiso) {
      if (permiso == true) console.log('Tiene permiso');
      if (permiso == false) console.log('NO Tiene permiso'); 
    //  else console.log("NO Tiene permiso")
    }
  //  negacion(true);
    negacion(false); 
      
  
    console.log("Ejercicio-4 con not")
    function negacion(permiso) {
      if (permiso) console.log('Tiene permiso'); 
    }
  //  negacion(true);
  //  negacion(false);
      
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
  

console.log("Ejercicio " + (3 + 1) + " " +"Boolean")
console.log(3 + 1 + " Ejercicio")
1           // true
0           // false
-1          // true
true        // true
false       // false
'string'    // true
null        // false
undefined   // false
// []          // true
