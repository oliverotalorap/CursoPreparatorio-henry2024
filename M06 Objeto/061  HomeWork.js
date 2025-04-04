
function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var objeto = {
      nombre: nombre, 
      edad: edad,
      meow: function () {
         return "Meow!"
      },
   };
   return objeto;
}
var crearGato = ['Ema', 10];
console.log(crearGato.meow);
console.log(crearGato);

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código: 
   var objeto = {
      nombre: nombre, 
      email: email,
      password: password,
   }
   return objeto;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null; 
   return objeto; 
   //return (objeto[propiedad] = null); //-no retorna segun clase- 
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var resultado = objetoMisterioso.numeroMisterioso * 5;
   return resultado;
   return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   //delete objeto.propiedad; -no funciono- 
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email) return true;
   return false;

   if(objetoUsuario.email != null && objetoUsuario.email != undefined) {
      return true;
   } else {
      return false;
   };
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objeto.hasOwnProperty(propiedad);
   
   if (objeto.propiedad = propiedad) {return true;
   } else {
   return false;
   };
   // - no retorn false- 
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.password == password) return true;
   return false;

}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;

   var ultimoAmigo = [];
   objetoUsuario.amigos.push[nuevoAmigo];
   return ultimoAmigo;
   // - mi codigo NO FUNCIONO-
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for(let i = 0; i< objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i]["esPremium"] = true;
   };
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let sumatoriaLikes = 0;
   for(let i = 0; i<objetoUsuario['posts'].length; i++) {
      sumatoriaLikes += objetoUsuario['posts'][i]['likes']
      //objetoUsuario['posts'][i]['likes'] += sumatoriaLikes;
   };
   return sumatoriaLikes;

   objetoUsuario[posts = {post: likes()}];
   for(var prop in objetoUsuario[posts = {post: likes( )}]);
   // devo allar la formula de sumar-
}
/*const objetoUsuario = {
   nombre: 'Nombre1',
   edad: 20,
   posts: [
      {
         titulo: 'post1',
         contenido: 'contP1',
         likes: 15
      },
      {
         titulo: 'post2',
         contenido: 'contP2',
         likes: 150
      },
   ],
}; */

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto['calcularPrecioDescuento'] = function () {
      return this.precio - this.precio * this.porcentajeDeDescuento; // PorcentajeDeDescuento
   }
   return objetoProducto;
}
/*   
   objetoProducto.calcularPrecioDescuento = function () {
      var valorDescuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
      return objetoProducto.precio - valorDescuento; 
      var precioFinal = objetoProducto.precio - valorDescuento; 
      return precioFinal;
   };
   return objetoProducto;
const objetoProducto = {
articulo: computador, 
color: Rosa,
presio: 10,
PorcentajeDeDescuento: 0.2,

} */