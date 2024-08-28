console.log("Ejercicio A Break en bucle-for" );
for (let i = 0; i<= 20; i++) {
   if (i == 12){ break;
   }
   console.log(i);
}
console.log("Ejercicio A Break en bucle-for" );
for (let i = 0; i<= 20; i++) {
   if (i == 12){ continue;
      if (i == 15){ break;}  // no lo resibe
   }
   console.log(i);
}


console.log("Ejercicio " + ("1A") +" whilw-Break" );
comprobarBreak(1);
function comprobarBreak(x) {
var i = 0;
   while (i < 6) { if (i == 3) break;
      i++;
   }

    console.log( i * x);
   // return i * x;
 }

console.log("Ejercicio " + ("2B") +" whilw-Break" );
comprobarBreakRomper(1);
//comprobarBreakRomper(2);
function comprobarBreakRomper(x) {
   var t = 0;
   var e = 0;
   while (e < 10) { if (e == 5) break;
      e++;
   }
   t+= e;      //t+=e; NO entiendo 
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
