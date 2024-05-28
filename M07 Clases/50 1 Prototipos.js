// PROTOTIPOS.
Array.prototype.mayorQueTres = function() {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
        //if (this[i] > 3) {arregloModificado.push(this[i]);
        //} else { arregloModificado.push('MENOR');
        //}
        if (this[i] > 3) { arregloModificado.push('mayor');
        } else {arregloModificado.push(oliver[i]);
        }
    }
    return arregloModificado;
};
var oliver = [1, 2, 3, 4, 5, 6, 'hola'];
//console.log(arreglo);
console.log(oliver.mayorQueTres());
// console.log(this.mayorQueTres()); -NO FUNCIONA-
//var nuevoArreglo = arreglo.mayorQueTres();
//console.log(nuevoArreglo);


class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('Colombia');
continente.agregarPais('Mexico');
continente.agregarPais('Panama');
console.log(continente.paises);

