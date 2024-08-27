console.log("Ejercicio 1 cuidaosConElConsole")
function cuidadoConElConsoleLog(nombre) {
  console.log(nombre);
  return nombre;
};
cuidadoConElConsoleLog("Jose");
//cuidadoConElConsoleLog(Oliver); // sin comillas el argumento da ERROR

console.log("Ejercicio 2 otraFuncion")
function otraFuncion() {
  return (
    "El nombre retornado por la funcion ´cuidadoConElConsoleLog´ es: " + 
    cuidadoConElConsoleLog("Camilo")
  );
};
otraFuncion()

console.log("Ejercicio 3 otraFuncion")
function cuidadoConElReturn(nombre) {
  //  console.log(nombre);
  return nombre;
};
cuidadoConElReturn();
