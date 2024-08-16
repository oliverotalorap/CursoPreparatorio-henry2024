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
    