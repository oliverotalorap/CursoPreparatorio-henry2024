console.log(1 + 'er Ejemplo');
var devuelvoUsuario = function() { return 'ANTONIO';  }
var devuelvoSaludo = function() { return 'Hola'; } 
var saludar = function (cb1, cb2) {
    return cb1() + ' ' + cb2();
}
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);
 //console.log(saludar); -NO FUNCIONA-


console.log(2 + 'do Ejemplo');
function devuelvoUsuario2() { 
    return 'BRUNO' };
function devuelvoSaludo2() { 
    return 'Buenos diaz' };
function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
}

 var resultado = saludar(devuelvoSaludo2, devuelvoUsuario2);
 console.log(resultado);

 console.log(3 + 'er Ejemplo');
var devuelvoFrase = function (comida){
    return "Hoy quiero comer: " + comida
};
var hablar = function (comida, cb) {
    return cb (comida);
};
 
var fraseFinal = hablar("pizza", devuelvoFrase);
console.log(fraseFinal);
