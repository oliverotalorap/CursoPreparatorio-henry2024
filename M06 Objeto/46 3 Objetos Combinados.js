console.log(1 + 'er Ejercici -Objetos bariados-');

const arrayObjeto1 = [
    { 
    nombre: "Any",
    apellido: "Cely",
    edad: 30,
    deporte: "Futbol",
    },
    {
    nombre: "Ana",
    apellido: "Diaz",
    edad: 33,
    deporte: "tenis",
    },
    {
    nombre: "Antonio",
    apellido: "Tenjo",
    edad: 35,
    deporte: "tejo",
    },
    {
        nombre: "Zeus",
        apellido: "Zaes",
        edad: 50,
        deporte: "polo",
        },
];

for(let i = 0; i < arrayObjeto1.length; i++) {
    console.log("===========================");
    console.log(arrayObjeto1[i]);
    console.log("nombre " + arrayObjeto1[i].nombre);
    console.log("apellido " + arrayObjeto1[i].apellido);
    console.log("edad " + arrayObjeto1[i].edad);
    console.log("deporte " + arrayObjeto1[i].deporte);
    
};
console.log(arrayObjeto1);

var lasPropiedades = Object.keys(arrayObjeto1);
console.log(lasPropiedades);
//console.log(Object.keys(arrayObjeto1));

var losValores = Object.values(arrayObjeto1);
console.log(losValores);




