console.log("OBJETOS Ejercicio-01 -Deportes-")

var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
console.log(deportes);
console.log(deportes.conBalon);
console.log(deportes.sinBalon);


console.log("OBJETOS Ejercicio-02 -Datos persona-")
var persona = { 
    nombre: 'Lucas', 
    edad: 20, 
    estudios: { esProgramador: true },
    sueldo: 1000
};
console.log(persona.nombre);
console.log(persona);

console.log("ASIGNAR o cambiar propiedades")
persona.nombre = 'Martín';
console.log(persona.nombre);
persona.edad = 32;
console.log(persona);


console.log("OBJETOS Ejercicio-03 - CREAR Objetos Eje-Carros")
//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari']; // -No admite { };
autos.modelos = ['Camioneta', 'Camion', 'Deportivo'];
console.log(autos);
 
console.log("BORRAR Propiedades con -delete-")
delete autos.marcas;
console.log(autos);

console.log("OBJETOS Ejercicio " + (3+1) + " Saludo -Hola-")
var misFunciones = {
    saludar: function() {console.log('Hola');
    },
};
misFunciones.saludar()


console.log("OBJETOS Ejercicio " + 5 + " DON NOTATION")
// DOT NOTATION
var atuendos = { 
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.manos)
    
console.log("OBJETOS Ejercicio " + 5 + " BRACKET NOTATION")
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

