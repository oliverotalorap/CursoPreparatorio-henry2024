//AND
function mayorYMenor(num) {
	if( num > 5 && num < 10) console.log(true);
	else console.log(false);
}
mayorYMenor(2);
mayorYMenor(7); 

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false); 
}
 // mayorYMenorYPar(9);
 mayorYMenorYPar(6); 
 mayorYMenorYPar(7); 

 console.log(2+1);
// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 5) console.log(true);
    else console.log(false); }
 operadorOr('Henry');
 operadorOr('Hola');
 operadorOr('Javascript');
 
 console.log(3+1+" NEGACION");
 // NOT
function negacion(permiso) {
    if (permiso === true) console.log('Tiene permiso');
    if (permiso !== true) console.log('Tiene permiso'); }
  negacion(true);
  negacion(false);

console.log(4+1+" COMPLEJA");
function condicionCompleja(num) {
  //  if(num > 9 && num % 2 === 0 || num === 3); console.log(true);
  if( num > 9 && num % 2 === 0 || num === 3) console.log(true);
	else console.log(false);
}
 condicionCompleja(10);
 condicionCompleja(7);
 condicionCompleja(11);
 condicionCompleja(3);

 1           // true
0           // false
-1          // true
true        // true
false       // false
'string'    // true
null        // false
undefined   // false
// []          // true