console.log("CALLBACKS Ejercicio  01 -DevolberSAludo y usuario-")
var devuelvoUsuario = function() {return 'Oliver'};
var devuelvoSaludo  = function() {return 'Hola'; }; 
var saludar = function (cb1, cb2) {
    return cb1() + ' ' + cb2();
};
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);
//console.log(saludar); -NO FUNCIONA- //Comentar frase con Ctrl+k/+c y +k/+u
  
console.log("CALLBACKS Ejercicio  02 -DevolberUsuario2-")
function devuelvoUsuario2() {return 'BRUNO'};
function devuelvoSaludo2() { return 'Buenos diaz' };
function saludar3(cb1, cb2) {
        return cb1() + ' ' + cb2();
};
var resultado2 = saludar3(devuelvoSaludo2, devuelvoUsuario2);
console.log(resultado2);


console.log("CALLBACKS Ejercicio  03 -DevolberFrase -ejemplo- comida-")
//var devuelvoFrase = function (comida){ 
var devuelvoFrase = function (comida){ 
    return "Hoy quiero comer: " + comida };
var hablar = function (comida, cb) {
    return cb (comida); 
};
var fraseFinal = hablar("Sancocho", devuelvoFrase);
console.log(fraseFinal);


        