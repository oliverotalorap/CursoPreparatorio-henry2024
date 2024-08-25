 
console.log(14+ " Ejec");
function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
  // let num = '';
  let result = '';
  let i = 0;
  do { i = i + 1; result = result + i; }
  while (i<8);
  console.log(result)
  console.log(i + " Resultado Total");
  // console.log(result + " Resultado Total");
  console.log(num)
  // Expected output: "12345" // do-sentencia; while.-(condición);
} 
doWhile(1);

i = 0;
n = 0;
while (i < 5) { i++;
   if (i == 3) continue; n += i;
}
// console.log(result)
// console.log(i);
