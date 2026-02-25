// TIPOS DE VARIABLES

// VAR
// en desuso, define variables globales que escapan al scope
// var dato = "hola";
// console.log(dato);

// LET
// variable moderna, permite reasignación de valores, conserva scope
// let dato = 3;
// dato = "hola";
// console.log(dato);

// CONST
// define un valor constante, es decir, no se puede reasignar
// lo que sí se puede hacer es mutarlo
// const dato = 3;
// dato = "hola";
// console.log(dato);
// for(let i = 0; i<10; i++){
// }

// ---------------------------------------------------------//
// CREAR UNA VARIABLE PARA CADA TIPO DE DATO

// NUMBER
// los numeros pueden operarse matematicamente
// se recomienda iniciarlos con let   
// let numero = 5;

// STRING
// las cadenas de texto tienen muchas propiedades
// (buscar caracteres o subcadenas, concatenar, etc)
// se recomienda iniciarlos con let
// let cadena = "hola chicos";

// BOOLEAN
// define solo verdadero o falso
// se recomienda iniciarlos con let   
// let verdadero = true;
// let falso = false;

// let estado = true;
// estado = false;

// NULL
// indica que la posición de memoria está vacía
// se recomienda iniciarlos con let
// let nulo = null;   

// UNDEFINED
// indica que el dato es indefinido, es decir,existe, pero se desconoce
// su valor   
// se recomienda iniciarlos con let
// let dato;
// console.log(dato);

// ARRAY
// conjunto de valores, si bien en JS se puede pasar cualquier tipo 
// de dato en un array, es una mala práctica hacerlo
// dependiendo el uso, se recomienda iniciarlo con let o const
// const array = [1,true, "hola", [], null, undefined, {}];

// OBJECT
// conjunto de claves-valor
// casi obligatorio declararlo con const
// existen objetos literales y objetos como instancia de clase
// const objetos = {
//     clave : "valor",
//     numero : 3
// }

// console.log(objetos.clave);
// objetos.clave = "nuevo valor";
// console.log(objetos.clave);

// ----------------------------------------------------------------//
// SCOPE (ALCANCE) DE VARIABLES
// las llaves delimitan bloques de código, y las variables dentro
// de un bloque no deberían poder "escapar" del bloque, es decir,
// no deberian ser accesibles desde fuera
// VAR escapa del bloque (excepto en funciones)
// LET y CONST no lo hacen
// if(true){
//     var x = 1;
//     let y = 2;
//     const z = 3;
//     // console.log(y)
// }
// if(true){
//     console.log(x);
//     console.log(y);
// }