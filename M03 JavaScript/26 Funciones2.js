function cuidadoConElConsoleLog(nombre) {
  console.log(nombre);
  return nombre;
}

function otrafuncion() {
  return (
    "El nombre retornado por la funcion ´cuidadoConElConsoleLog´ es: " + 
    cuidadoConElConsoleLog("Camilo")
  );
} 
// otraFuncion()
//Camilo

function cuidadoConElReturn(nombre) {
  return nombre;
  console.log(nombre);
}