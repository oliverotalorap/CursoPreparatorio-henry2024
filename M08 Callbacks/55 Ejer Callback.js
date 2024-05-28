console.log(1 + "er Ejercicio");

function function1(fn){
    setTimeout(function(){
        console.log("mensaje 1");
        fn();
    }, 2000);
}
function function2(){
    console.log("mensaje 2")
}


function1(function2);
//function1();
//function2();

console.log(2 + "do Ejercicio");
// Parametros y Argumentos-
function miFuncion(parametro1, parametro2){
    return parametro1 + parametro2;
    // codigo (sentencia)
}
// INVOCAMOS:
miFuncion (argumento1, argumento2);
console.log(miFuncion);


