console.log("Ejercicio " + ("1A") +" whilw-Break" );
function comprobarBreak(x) {
var i = 0;
   while (i < 6) { if (i == 3) break;
       i++;
   }
    console.log( i * x);
   // return i * x;
 }
 comprobarBreak(1);

console.log("Ejercicio " + ("2B") +" whilw-Break" );
comprobarBreakRomper(1);
//comprobarBreakRomper(2);
function comprobarBreakRomper(x) {
var e = 0;
var t = 0;
   while (e < 10) { e++;
    if (e == 5) break;
   }
   t+= e;
    console.log( e * x + " Variable iter");
   // return e * x;
}
//console.log(t + " Variable suma")
//console.log(e + " Variable iteracion T Pasos")

 console.log("Ejercicio 3 Math");
 Math.max(1,2,3,4,5,);
 Math.min(1,2,3,4,5,);

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
//   console.log(i);

}
console.log(Math.min);
console.log(Math.max);
//return Math.max;
