// ES6

// IMPORTACIÓN DE MÓDULOS
// LO VEMOS CON EL PROYECTO TODO EL TIEMPO, TENGAN CALMA
//require("./2-asincronismo.js") // fue reemplazado por import

// // TEMPLATE STRINGS
// const nombre = "martin";

// console.log("hola " + nombre);
// console.log(`hola ${nombre}
//     como estas?`)

// // VALORES POR DEFECTO EN LOS ARGUMENTOS DE FUNCIONES
// function sumar(num1 = 3, num2 = 0) {
//     return num1 + num2;
// }
// console.log(sumar(undefined, 5));
// function agregarUsuario({ nombre, edad, email = "no posee" }) {
//     console.log(`Nombre: ${nombre}, Edad: ${edad}, Email: ${email}`);
// }

// agregarUsuario({ nombre: "Martin", edad: 25 });

// // DESTRUCTURACION EN OBJETOS Y ARRAYS
// const array = [7, 2, 3, 4, 5];
// const num1 = array[0]

// const [  ,num2] = array;
// const [num1, , , num4] = array;
// console.log(num1, num4);
// const obj = { nombre: "martin", edad: 25, email: "[EMAIL_ADDRESS]" }
// const nombre = obj.nombre;
// const { nombre, edad } = obj
// console.log(nombre, edad)

// // SPREAD Y REST PARA ARRAYS
// const array = [1, 2, 3, 4, 5, 6];
// const array2 = [...array, 4, 5, 6];
// const arrayCopia = [...array]

// for (let i = 0; i < array.length; i++) {
//     arrayCopia.push(array[i]);
// }

// const [, , ...arrayFiltrado] = array;
// console.log(arrayFiltrado)

// PROMESAS EN REEMPLAZO DE CALLBACKS (ver asincronismo.js, callback.js, promesas.js)
// VER EJEMPLO DE "CALLBACK HELL" EN LAS DIAPOSITIVAS PARA ENTENDER EL PROBLEMA
// QUE SOLUCIONAN LAS PROMESAS
// const dividir = require("./4-promesas.js");

// dividir(10, 0)
//     .then((resultado) => {
//         console.log(resultado)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("finalizo la operacion")
//     })

// -----------------------------------------------------------------
// ES7

// OPERADOR EXPONENCIAL
// const numero = 2;
// const cuadrado = Math.pow(numero, 3);
// const cuadrado = numero ** 2;
// console.log(cuadrado)

// METODO INCLUDES PARA ARRAY Y STRING
// const numeros = [1, 2, 3, 4, 3, 3, 7];
// console.log(numeros.includes(1, 1));
// const saludo = "hola";
// console.log(saludo.includes("h"))

// -----------------------------------------------------------------
// ES8

// ASYNC AWAIT PARA PROMESAS EN FUNCION
// const dividir = require("./4-promesas.js");

// async function ejecutarDivision() {

//     const resultado = await dividir(10, 0);
//     return resultado;
// }

// ejecutarDivision()
//     .then((resultado) => {
//         console.log(resultado)
//     }).catch((error) => {
//         console.log(error)
//     })

// -----------------------------------------------------------------
// ES9

// SPREAD Y REST PARA OBJETOS
// SPREAD => COPIA PROPIEDADES DENTRO DE UN OBJETO DENTRO DE OTRO
// const usuario = { nombre: "martin", edad: 25 };
// const usuarioActualizado = { ...usuario, email: "[EMAIL_ADDRESS]" };
// console.log(usuarioActualizado);

// REST =>EXTRAE PROPIEDADES A OTRO OBJETO
// const { email, ...resto } = usuario;
// console.log(resto);

// -----------------------------------------------------------------
// ES10
// APLANADO DE ARRAYS CON .flat()
// const array = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
// const arrayPlano = array.flat(2);
// console.log(arrayPlano);
// -----------------------------------------------------------------
// ES11

// IMPORT DINÁMICO

// OPERADORES NULLISH (?? Y ||)
// VALORES FALSIES: 0, "", null, undefined, false, NaN
// const numero = null;
// console.log(numero ?? 0);

// -----------------------------------------------------------------

// ES12

// PROPIEDADES PRIVADAS DE CLASE
// class Persona{
//     #nroCuenta;
//     constructor(nroCuenta){
//         this.#nroCuenta = nroCuenta;
//     }

//     actualizarCuenta(){
//         this.#nroCuenta = 123456789;
//     }
// }

// -----------------------------------------------------------------
// ES13

// CAMPOS Y METODOS ESTATICOS
// class Personas {
//     static contador = 0;
//     constructor(nombre) {
//         this.nombre = nombre;
//         Personas.contador++;
//     }
// }

// const persona1 = new Personas("martin");
// const persona2 = new Personas("martin");
// const persona3 = new Personas("martin");

// console.log(Personas.contador);

// TOP LEVEL AWAIT (YA NO ES OBLIGATORIO ESTAR DENTRO DE UNA FUNCION)

// const dividir = require("./4-promesas.js");
// import dividir from "./4-promesas.js";

// async function ejecutarDivision() {

//     const resultado = await dividir(10, 0);
//     return resultado;
// }

// try {
//     const resultado = await ejecutarDivision();
//     console.log(resultado)
// } catch (error) {

//     console.log(error);
// }
