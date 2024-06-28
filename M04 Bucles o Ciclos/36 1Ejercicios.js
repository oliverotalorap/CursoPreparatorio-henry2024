console.log("Ejercicio " + 1 +" " );
function esVerdaderoYFalso(booleano1, booleano2) {
    // La función recibe dos argumentos "booleano1" y "booleano2".
    // Retorna true si ambos son verdaderos, caso contrario, retorna false.
    // Tu código:
    return booleano1 && booleano2;
  }
  
  module.exports = esVerdaderoYFalso;
  
  console.log(" C6 Bucles ejercicio-17")
  function colors(color) {
    // La función recibe un color. Retorna el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // PISTA: utilizar el statement SWITCH.
    // Tu código:
    //    if (color == "blue") return "This is blue";
    //    if (color == "red") return "This is red";
    //    if (color == "green") return "This is green";
  //    if (color == "orange") return "This is orange";
  //    else return "Color not found";
  
  const colores = {
    blue: "This is blue",
        red: "This is red",
        green: "This is green",
        orange: "This is orange",
      };
      return colores[color] || "Color not found";
      // Conceptos de objetos y propiedades se aplico arriba
      
      //  switch (color) {
        //    case "blue": return "This is blue"; 
        //    case "red": return "This is red"; 
        //    case "green": return "This is green";
        //    case "orange": return "This is orange";
        //    return "Color not found";
        //  }
      }
      
      module.exports = colors;
      // paso-17  -NO PASO SWITCH-
      
      console.log(" C6 Bucles ejercicio-18")
      function productoEntreNúmeros(a, b) {
        // Dados dos argumentos "a" y "b", devuelve el producto de todos
        // los números entre a y b (inclusive).
        // Tu código:
        
        let producto = 1;
        for (let i = a; i <= b; i++) {
          producto *= i;
        }
        return producto === 0 ? 0 : producto;
      }
      
      module.exports = productoEntreNúmeros;
      // paso-18  -EXPLICACION- 
      
      
      console.log(" C6 Bucles ejercicio-19")
      function sumarHastaN(n) {
        // La función recibe un número "n" por argumento.
        // Devuelve la suma de todos los números desde 1 hasta n.
        // Tu código:
        let suma = 0;
        for (let i = 1; i <= n; i++) {
          suma = suma + i;
        }
        return suma;    
      }
      module.exports = sumarHastaN;
      // paso-NO SE- 
      
      console.log(" C6 Bucles ejercicio-20")
      function sumarHastaNConBreak(n) {
        // La función recibe un numero n por argumento.
        // Devuelve la suma de todos los números desde 1 hasta n.
        // Si la suma supera a 100, detén el bucle usando break.
        // Tu código:     
        let suma = 0;
        for (let i = 1; i <= n; i++) {
          suma = suma + i;
          if (suma > 100) break;
        }
        return suma;
        
        // var i = 1; while (i < n) { if (i == 100) break;  i++; }
        // while (i < n) { if (i == 100) break; i++; }
     }
     
     module.exports = sumarHastaNConBreak;
     // pasa-20 eXPLICACION 


      console.log(" C6 Bucles ejercicio-21")
      function esPotenciaDeDos(numero) {
        // La función recibe un "numero" por argumento.
        // Determina si es una potencia de 2.
        // Devuelve true si lo es, sino devuelve false.
        // PISTA: Utiliza un bucle while.
        // Tu código:
        while (numero > 1) {
          if (numero % 2 !== 0) return false;
          numero = numero / 2;
        };
        return true;
      
      //  if (numero % 2 == 0) return true;
      //  else return false;
      }
            module.exports = esPotenciaDeDos;
      // paso-21 -EXOLICACION-


      console.log(" C6 Bucles ejercicio-22")
      function doWhile(num) {
        // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
        // Retorna el valor final.
        // PISTA: Utiliza el bucle do-while.
        // Tu código:
        let i = 0;
        do {
          num = num + 5; i++;
        } while (i < 8);
        return num;
      }
      module.exports = doWhile;
      // paso-22 -EXPLICACION-
        