console.log("Ejercicio 1 -Bucle for-")
// FOR
var arr = [1, 2, 3, 4, 5];
console.log(arr[4]);
console.log(arr);
console.log(arr.reverse());
for (let i = 0; i <arr.length; i=i+1) {
   console.log(arr[i]);
}
   arr.forEach(function (elemento, indice){
      console.log(elemento, indice); });


console.log("Ejercicio 2 -Bucle for- EncontrarLetra")
function encontrarLetraP(string){ 
    var letras = string.split('');
    
      for (let i = 0; i < letras.length; i++){
         if (letras[i] == 'p'){console.log('Si tiene a p'); }
      //  if (letras[i] === 'p'){ 
      //    console.log('Si tiene a p'); }
      }
}
encontrarLetraP('JavaScript');
encontrarLetraP('Apretar');
//encontrarLetraP('Henry');

console.log("Ejercicio 3 -Bucle while--push -BOOM-")
// WHILE // verificar Ejercicio pq no entendi
var arrg = [];
while (arrg.length < 5 ) { arrg.push('BOOM');
}
console.log(arrg);
console.log(arrg.length);
arrg.forEach(function (elemento, indice){
   console.log(elemento, indice); });
