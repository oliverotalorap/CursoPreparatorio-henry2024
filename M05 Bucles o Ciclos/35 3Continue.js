console.log("Ejercicio " + (0.5 + 0.5) +" Continue" );
//let result = '';    //muestra cuantas iteraciones realizo
//let e = 0;
//let n = 0;
let n = "";
let i = 0;
while (i < 5) { i++;
   if (i == 3) continue;   // la funcion salta al llegar al 3
   n += i;
console.log( i );
//console.log(i + " Variable iter");
}
console.log(n + " Varible suma");
console.log(i + " Variable iter T-Pasos");

console.log("Ejercicio " + (1 +" A") +" DoWhile /HacerMientras" );
//let result = 0;   //suma el total de las iteraciones
let result = '';    //muestra cuantas iteraciones realizo
let e = 0;
do { e = e + 1; result = result + e;
} while (e <= 8);
console.log(result); // Expected output: "12345"
  

console.log("Ejercicio " + (1 + 1) +" Continue con: !=,|| y &&" );
var u = 0;
var t = 0;
while (u < 10) { u++; 
  if ( u== 5) continue;
  //  if (u == 10) continue;
  //  if (u != 5) continue;
  //  if (!u == 5) continue; // no aplica
  //  if (u == 5 || u == 10) continue;
  //  if (u == 5 && u == 10) continue; // no aplica
  //  if (u != 5 || u != 10) continue; // no aplica
  //  if (u != 5 && u != 10) continue;
  t += u;
  console.log(u + " Variable iter");
}
console.log(t + " Varible suma");
console.log(u + " Variable iter T-Pasos");

console.log("Ejercicio " + ("2A") +" Etiqueta checkiand" );
checkiandj: while (i < 4) {
  document.write(i);
  i += 1;

  checkj: while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if (j % 2 == 0) continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>" );
  document.write("j = " + j + "<br>");
}


console.log("Ejercicio " + ("2B") +" Etiqueta checkiand" );
checkiandj: 
i = 0;
j = 0;
//while (i < 5) { document.write(i);
while (i < 5) { i++;
  i += 1;
  checkj: while (j > 5) { document.write(j + "<br>");
    if (j % 2 == 0) continue checkj;
    j -= 1;
    console.log(i + " Variable iter");

    document.write(j + " is odd.<br>");
  }
  //document.write("i = " + i + "<br>" );
  //document.write("j = " + j + "<br>");
}


console.log("Ejercicio " + ("3") +" Etiqueta checkiand perosnlzd" );
checkiandj:
i = 0;
j = 0;
while (i < 5) {
  //document.write(i);
  //document.write(i + "<br>");
  i += 1;

  checkj:
  while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if ((j % 2) == 0)
      continue checkj;
    document.write(j + " is odd.<br>");
  }
  //document.write(i + i );
  //document.write("j = " + j + "<br>");
}
