console.log("OBJETOS Ejercicio " + 5 + " DON NOTATION")
// DOT NOTATION
var atuendos = { 
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.manos)
    
console.log("OBJETOS Ejercicio " + 5 + " BRACKET NOTATION")
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
//atuendos[piernas] = ['Bermudas', 'Pantalones'];// NO FUNCIONA
console.log(atuendos);


console.log("OBJETOS Ejercicio 6 "+"comidas propUno y propDos")
var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['propDos'] = ['Hamburguesa', 'Papas Fritas'];
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);


console.log("OBJETOS Ejercicio 7 -HasOwnProperty- tienePropiedadPropia")
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);

var tienePropiedad = libro.hasOwnProperty('autor'); //-METODO HENRY-
console.log(tienePropiedad);


console.log("OBJETOS Ejercicio  8 -key- llaves")
// KEYS
//var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);   //Debuelve Propiedades
console.log(todasLasPropiedades);

var todosLosValores = Object.values(libro); //Debuelve Valores
console.log(todosLosValores);


console.log("OBJETOS Ejercicio  9 -Bucle for in -")
//for (let prop in mundo) {
    var mundo = { continentes: 7, paises: 195, oceanos: 5 };
    for(var prop in mundo){
        console.log('Esta es la propiedad: '+ prop);  //,
        console.log('Este es el valor: '+ mundo[prop]);
    };
    
console.log("OBJETOS Ejercicio  10  -this- Hase referencia al Objeto")
//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'Maria Maria',
    info: function() {
        console.log('Mi perro es un  ' + this.raza);
        console.log('El dueño del perro es  ' + this.dueño);
        console.log(mascota.raza);
        console.log(this.raza);
    },
};

// mascota(); //- no funciona-
mascota.info();
console.log(mascota);
console.log(mascota.raza);


console.log("OBJETOS Ejercicio  11 -Ejercicios con array -")
// Ejercicio con ARRAY
const miArray = ["Beto", "David", "Juan", "Kevin"]; 
console.log(miArray);
miArray.push('Carlos');
console.log(miArray);

var nombre = miArray[1]; console.log(nombre);
console.log(miArray[1]);
console.log(miArray[4]);
console.log(miArray[miArray.length-1]);


