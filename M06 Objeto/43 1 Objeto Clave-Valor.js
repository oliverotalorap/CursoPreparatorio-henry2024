console.log(1 + ' Ejercicio')
var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
console.log(deportes.conBalon);
console.log(deportes.sinBalon);

console.log(2 + ' Ejercicio')
 var persona = { 
    nombre: 'Lucas', 
    edad: 20, 
    estudios: { esProgramador: true },
    sueldo: 1000
};
console.log(persona.nombre);
console.log(persona);

// ASIGNAR
persona.nombre = 'Martín';
console.log(persona.nombre);
persona.edad = 40;
console.log(persona);


console.log(3 + ' Ejercicio')
//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari']; // -No admite { };
autos.modelos = ['Camioneta', 'Camion', 'Deportivo'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

console.log(3+1 + ' Ejercicio')
var misFunciones = {
    saludar: function () {
        console.log('Hola');
    },
};
misFunciones.saludar()

console.log(5 + ' Ejercicio')
// DOT NOTATION
var atuendos = { 
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);