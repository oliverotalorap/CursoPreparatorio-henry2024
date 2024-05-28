var suma = 0;
for (let i = 0; i<6; i++) {
  suma = suma + i;
 console.log('Variable de iteración: ', i);
}
 console.log('Variable suma: ', suma);

 console.log(1+"-Ejer");
 var suma = 0;
 while(suma < 3) {
  suma = suma + 1;
     console.log(suma); };


console.log(2+"-Ejer");
var foo = 3;
switch (foo) {
  case -1:  console.log('1 negativo');
  case 3:  console.log('1 positivo');
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0+" puntos")
    // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
        console.log(1+2);
  break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:  console.log(2*3);
    break;
  default:
    console.log('default');
}

console.log(3+"-Ejer");
var foo = 2;
switch (foo) {
  case 9: console.log("suma");
  case 2: console.log(2);
          console.log("MAS");
  case -3: console.log(-2);
  case 4: console.log("Tres");
  break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default: console.log('default')
    // fall-through
  case 1: console.log('1 PUNTO');
}

console.log(4+"-Ejer");
var Animal = 'Jirafa';
switch (Animal) {
  case 'Vaca':
  case 'Perro':
  case 'Cerdo':
  case 'Jirafa':
    console.log('Este animal SI subirá al Arca de Noé.');
  break;
  case 'Deisy':
  case 'Nico':
  case 'Vale':
  case 'Oliver':
    console.log('Esta persona SI Entrara al Arca.');
    break;
  case 'Dinosaurio':
  case 'Mosca':
  default: 
  console.log('Este animal NO lO HARA.');
}

console.log(5+"-Ejer");
var foo = 1;
var output = 'Salida: ';
switch (foo) {
  case 10:  output += '¿Y ';
  case 1:  output += 'Cuál ';
           output += 'Es ';
           
  case 2:  output += 'Tu ';
  case 3:  output += 'Nombre';
  case 4:  output += '?';
    console.log(output);
    break;
  case 5:  output += '!';
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}
