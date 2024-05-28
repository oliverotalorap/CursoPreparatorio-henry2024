
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
    // Tu código:
    class Usuario {
       constructor(usuario, nombre, email, password){
       this.usuario = usuario; 
       this.nombre = nombre;
       this.email = email;
       this.password = password;
       } 
       //metodo saludar 
       saludar (){
          return 'Hola, mi nombre es ' + this.nombre;
       }
    }
    return Usuario; 
 }
 
 function agregarMetodoPrototype(Usuario) {
    // Agrega un método al prototipo de "Usuario".
    // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
    // Tu código:
    Usuario.prototype.saludar = function(){
       return "Hello World!";
    }    
 }
 
 function agregarStringInvertida() {
    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse".
    // [PISTA]: necesitarás utilizar el objeto "this".
    
    String.prototype.reverse = function () {
       var reverseString = "";
       for(let i = this.length - 1; i >= 0; i--) {
          reverseString += this[i]
       };
       return reverseString; 
    }
    /*
    String.prototype.reverse = function () {
       return this.split("").reverse().join("");
    };*/
 }
 
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre, apellido, edad, domicilio ){
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.domicilio = domicilio;
    }
    detalle () {
       return {
       nombre: this.nombre,
       apellido: this.apellido,
       edad: this.edad,
       domicilio: this.domicilio,
       }
    }
 }
 
 function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
    // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
    // Recibirás las propiedades por parámetro.
    // Retornar la instancia creada.
    // Tu código:
    let crearInstanciaDePersona = new Persona (nombre, apellido, edad, domicilio )
 
    return crearInstanciaDePersona;
 }
 new Persona("Oliver", "Otal", 44, "K3d")
 
 //return Persona.detalle; -NO FUNCIONAN-
 //console.log(new Persona);
 //console.log(crearInstanciaDePersona.Persona);
 //console.log(crearInstanciaPersona)
 
 function agregarMetodo() {
    // La función agrega un método "datos" a la clase "Persona".
    // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
    // Ejemplo: "Juan, 22 años".
    // Tu código:
    Persona.prototype.datos = function() {
       return this.nombre + ", " + this.edad + " " + "años";
    };
 }
 //return $(this.nombre), $(this.edad) + ' años';
 // let array =[ 1,2,3,4,5]
 
