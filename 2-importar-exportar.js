// SI EL TIPO DE PROYECTO USA COMMON, CUANDO IMPORTEMOS Y EXPORTEMOS
// MÓDULOS USAREMOS UNA FUNCION LLAMADA "require"
// EN CAMBIO, SI USAMOS MODULE, IMPORTAMOS CON LA PALABRA RESERVADA
// "import".

// VAMOS A ESTRA TRABAJANDO CON EL SISTEMA DE ARCHIVOS, ASÍ QUE
// IMPORTAREMOS EL MÓDULO NATIVO "fs" (FILE SYSTEM)

// ------------------------
// // ASÍ SE HARÍA EN COMMON
// const fs = require("fs");
// ------------------------
// // ASI SE HARÍA EN MODULE
// import fs from "fs";

// console.log("hola chicods");

// ------------------------
// VEREMOS ALTERNATIVAS SOBRE IMPORTAR Y EXPORTAR FUNCIONALIDADES
// A LO LARGO DEL CURSO, ASI COMO LOS IMPORTS DINÁMICOS


// const operaciones = require("./5-modulos-propios.js");
// const { sumar } = require("./5-modulos-propios.js");

// import operaciones from "./5-modulos-propios.js";
// import { sumar } from "./5-modulos-propios.js"
// console.log(sumar(2, 7));
// console.log(operaciones.sumar(1, 5));