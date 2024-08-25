console.log("Ejercicio " + (0.5 + 0.5) +" switch frutas" );
var expr = "Naranjas";
var expr = "Platanos";
//var expr = "Cerezas";
//var expr = 'Cocos';
//var expr = "Papayas";
switch (expr) {
  case "Naranjas": console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas": console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos": console.log("El kilogramo de platanos cuesta $0.48.");
   // break;
  case "Cerezas": console.log("El kilogramo de cerezas cuesta $3.00.");
  //  break;
  case "Mangos":
  case "Papayas": console.log("El kilogramo de mangos y papayas cuesta $2.79.");
  //  break;
  default: console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}
console.log("¿Hay algo más que quisiera consultar?");


console.log("Ejercicio " + (2 + "-A") +" switch break-default");
var foo = 5;
switch (foo) {
  case 2: console.log(2);
  break;        // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default: console.log('default')
  //fall-through
  case 1: console.log('1 PUNTO');
}

console.log("Ejercicio " + (2 + "-B") +" switch break-default");
var foo = 9;
switch (foo) {
  case 9: console.log("suma");
  case 2: console.log(2);
          console.log("MAS");
  case 3: console.log(3);
  case 5: console.log("Cinco");
  //break;        // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default: console.log('default')
  // fall-through
  case 1: console.log('1 PUNTO');
}
// case -caso, default -preseterminado,

console.log("Ejercicio " + 3 +" Animales Arca");
//var Animal = "Perro";
//var Animal = "Condor";
//var Animal = "Mosca";
var Animal = "Armadillo";
switch (Animal) {
  case 'Vaca':
  case 'Perro':
  case 'Cerdo':
  case 'Jirafa':
    console.log('Este animal SI subirá al Arca de Noé.');
  break;
  case "Aguila":
  case "Alcon":
  case "Condor": console.log('Esta ave escoltara el Arca.');
    break;
  case 'Dinosaurio':
  case 'Mosca':
  case "Tiburon":
  default:          //defaul resibe el nombre que no este en la lista.
  console.log('Este animal NO lO HARA.');
}

console.log("Ejercicio " + 4 +" Preguntas");
var foo = 10;
var output = 'Salida: ';
switch (foo) {
  case 10:  output += '¿Y ';
  case 1:  output += 'Cuál ';
           output += 'Es ';   
  case 2:  output += 'Tu ';
  case 3:  output += 'Nombre';
  case 4:  output += '?';
    console.log(output);
  //  break;
  case 5:  output += '!';
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}
