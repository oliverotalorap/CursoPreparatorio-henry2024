console.log(1 + 'er Ejercicio -Crear un Array-');
const arrayUno = ['1Ana', '2Beto', '3Carlos', '4Dany'];
var cant = arrayUno.length;
console.log(cant);
console.log(arrayUno.length);

var nombre = arrayUno[0];
console.log(nombre); 
console.log(arrayUno[1]);
console.log(arrayUno[4]);

console.log(arrayUno);
var primerEle = arrayUno.shift();
var ultimoEle = arrayUno.pop();
console.log(primerEle, ultimoEle);

arrayUno.unshift('0 Cecili')
arrayUno.push('5Ema');
console.log(arrayUno);

// 
console.log(2 + 'do Ejercicio. -array-');
const array1uno = ['1Anis', '2Breba', '3Coco', '4Durasno','5Fresa'];
console.log(array1uno);
var cant = array1uno.length;
console.log(cant);
//console.log(array1uno.length);
for (let i = 0; i<array1uno.length; i++) {
console.log(array1uno[i]);
};

// Crear un Objeto
console.log(3 + 'er Ejercicio -Crear un Objeto-');
const valrObjeto = {
    nombre: "Any",
    apellido: "Cely",
    edad: 30,
    deporte: "Futbol",

};
console.log(valrObjeto
);

console.log(valrObjeto
.apellido);
valrObjeto.apellido = "Diaz";
valrObjeto.edad = 40;
valrObjeto.comida = "arroz";
delete valrObjeto.deporte;

for (let key in valrObjeto
) {
    //console.log(key);
    console.log(key, valrObjeto
    [key]);
};

var todasLasPropiedades = Object.keys(valrObjeto
);
console.log(todasLasPropiedades);
//console.log(Object.keys(valrObjeto));

//var todosLosValores = Object.values(valrObjeto);
//console.log(todosLosValores);
console.log(Object.values(valrObjeto
));


