function viajar(destino) {
  if(destino === 'Brasil') {console.log('Gire a la izquierda');} 
  else if(destino === 'Argentina') {console.log('Gire a la derecha');} 
  else if(destino === 'Villeta') { console.log('Llegamos');}
  else if(destino === 'Panama') { console.log('Lejos'); }
  else {console.log('Nos perdimos'); } };
  
  // viajar('Brasil');
  // viajar('Argentina');
  viajar('Villeta');
  // viajar('Panama');
  // viajar('Lima');
  
  function puedeManejar(edad) {
    if (edad >= 18) {
      console.log(true);
    } else {
      console.log(false) ;
    } 
  }
  puedeManejar(18);
    
  function puedeTrabajar(edad) {
    if (edad >= 20) { console.log("si"); } 
    else { console.log("no"); } 
  } 
    puedeTrabajar(19);
    puedeTrabajar(21);

console.log("Ejercio 2 condiconales")

if( true) {console.log("el if dio true"); }
if( false) {console.log("el if dio true") }

console.log("Ejercio 3 condiconalesCAmilo240826")
let edad1 = 17;
let edad2 = 20;

if(edad1 == edad2) console.log("el if dio true")
  else if(edad1 < edad2) console.log("a estudiar")
  else {console.log("el if dio false")}

    