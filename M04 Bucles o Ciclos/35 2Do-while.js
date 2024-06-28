console.log("Ejercicio " + (0.5 + 0.5) +" DoWhile /HacerMientras" );

let result = '';
let i = 0;
do {
  i = i + 1;
  result = result + i; }
while (i<5);
console.log(result) // Expected output: "12345"
console.log(i);


// do.  sentencia;      while.  (condición);

console.log(2+"-Ejer");
var suma = 0;
for (let i = 0; i < 4; i++) {
    suma = suma + i;
    console.log(i);  }  // console.log('Variable de iteración: ', i);
    console.log(suma + " Suma Total");  // console.log('Variable suma: ', suma);

console.log(3+"-Ejer");
i = 0;
n = 0;
while (i < 5) { i++;
   if (i == 3)
   continue;
   n += i;
}

console.log(4+"-Ejercicio switch");
var expr = 'Cocos';
switch (expr) {
    case 'Naranjas': console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
    case 'Manzanas': console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
    case 'Platanos': console.log('El kilogramo de platanos cuesta $0.48.');
    break;
    case 'Cerezas': console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
    case 'Mangos':
    case 'Papayas': console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
    default: console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  console.log("¿Hay algo más que quisiera consultar?");


  console.log(5+"-Ejer");
  function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var i = 0;
    do { num = num + 5; i++; } 
    while (i < 8) 
    console.log(num);
    return num;
  }
  console.log(doWhile(0));

  