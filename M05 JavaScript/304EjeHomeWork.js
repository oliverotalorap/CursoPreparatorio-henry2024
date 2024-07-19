/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
    // Retorna el valor de "num" elevado al cuadrado.
    // Tu código:
    var elevarAlCuadrado = Math.pow(num,2) 
    // return elevarAlCuadrado; 
    console.log(elevarAlCuadrado) }
elevarAlCuadrado(3);

 function elevarAlCubo(num) {
    // Retorna el valor de "num" elevado al cubo.
    // Tu código:
    var elevarAlCubo = Math.pow(num,3) 
    // return Math.pow(num,3); 
    console.log(elevarAlCubo) }
elevarAlCubo(3); 

 function elevar(num, exponent) {
    // Retorna el valor de "num" elevado al exponente "exponent".
    // Tu código:
    var elevar = Math.pow(num, exponent);
    // return Math.pow(num, exponent); 
    console.log(elevar); }
elevar(5,4);

 function redondearNumero(num) {
    // Redondea "num" al entero más próximo y retórnalo.
    // Tu código:
    var redondearNumero = Math.round(num);
   // return "redondearNumero"; 
console.log(redondearNumero); }
redondearNumero(3.51);
redondearNumero(4.49);

 function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba y retórnalo.
    // Tu código:
    var redondearHaciaArriba = Math.ceil(num);
    // return redondearHaciaArriba;  
    console.log(redondearHaciaArriba); }
    redondearHaciaArriba(4.89);

    function redondearHaciaAbajo(num) {
      var redondearHaciaAbajo = Math.floor(num);
      console.log(redondearHaciaAbajo); }
      redondearHaciaAbajo(6.95);

 function numeroRandom() {
    // Genera un número al azar entre 0 y 1 y retórnalo.
    // Tu código:
    var numeroRandom = Math.random();
    // return numeroRandom; 
   console.log(numeroRandom); }
   numeroRandom(1.25);
   numeroRandom(5.51);
   numeroRandom(9.95);
