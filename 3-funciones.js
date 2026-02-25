// FUNCION TRADICIONAL
// function fn(){
//     console.log(this)
//     // return "hola"
// }
// fn()

// ARGUMENTOS
// valores pasados a los paréntesis
// function saludar(nombre){
//     console.log("hola " + nombre);
// }

// saludar("Martin");

// ARROW FUNCTION
// a diferencia de las tradicionales, carecen de contexto propio (this)
// y heredan el del bloque que las precede
// const fn = () => {
//     /**toda la logica */
//     console.log(this)
// }
// fn();

// tienen también return implícito si no usamos las llaves 
// const fn = ()=>"hola"; //return implicito

// console.log(fn())
// --------------------------------------------------//
// ACTIVIDAD
// -CREAR UNA FUNCION QUE PERMITA SUMAR DOS NÚMEROS

// function sumar(num1, num2){
//     return num1 + num2;
// }

// const resultado = sumar(5,7);
// console.log(sumar(1,3));
// console.log(resultado);