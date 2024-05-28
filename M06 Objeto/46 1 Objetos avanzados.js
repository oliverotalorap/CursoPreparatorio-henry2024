console.log(1 + 'er Ejercicio' );
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);

var tienePropiedad = libro.hasOwnProperty('autor'); //-METODO HENRY-
console.log(tienePropiedad);
console.log(libro.hasOwnProperty('autor'));        // -METOSO DIRECTO-

// KEYS
//var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades + "  Son Propiedades");

var todosLosValores = Object.values(libro);
console.log(todosLosValores + "  Son Valores" ); 
// comentario.
//! color 
console.log(2 + 'do For-in ');
//for (let prop in mundo) {
var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for(var prop in mundo){
    console.log('Esta es la propiedad: '+ prop);  //,
    console.log('Este es el valor: '+ mundo[prop]);
}


console.log(3 + 'ro This');
//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
        console.log(mascota.raza);
        console.log(this.raza);
        console.log('Mi perro es un  ' + this.raza);
        console.log('El dueño del perro es  ' + this.dueño);
    },
};
// mascota(); //- no funciona-
//mascota.info();
console.log(mascota);
console.log(mascota.raza);

console.log(4 + 'to Array-Ejemplo');
// Ejercicio con ARRAY
const miArray = ["Beto", "David", "Juan", "Kevin"]; 
console.log(miArray);
miArray.push('Carlos');
console.log(miArray);

var nombre = miArray[1]; 
console.log(nombre);
console.log(miArray[1]);

var nombre = miArray[3]; console.log(nombre);

console.log(52 + 'to Array-Ejemplo');