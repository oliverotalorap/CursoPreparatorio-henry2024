// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
   this.puertas = puertas;
   this.color = color;
   this.marca = marca;
   this.año = año;
   this.ruedas = ruedas;

   this.informacion = function () {
      console.log("Este es un " + this.marca + " de color " + this.color);
      };
};
var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
var miAuto = new Auto(3, 'Verde', 'Jeep', 2024, 5);
miPrimerAuto.informacion();
miAuto.informacion();

//console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);

 // EXPRESIÓN DE CLASE.
class Carro{
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
    informacion(){
      console.log("Este es un " + this.marca + " de color " + this.color);
    }
 }
 var miSegundoAuto = new Carro(4, 'Blanco', 'Fiat', 2015, 4);
 var miTercerAuto = new Carro(5, 'Cafe', 'Foor', 2000, 6);
 miSegundoAuto.informacion();
 miTercerAuto.informacion();

 //console.log(miSegundoAuto);
 //console.log(miSegundoAuto.marca);

