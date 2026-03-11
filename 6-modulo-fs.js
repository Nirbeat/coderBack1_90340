// VAMOS A USAR EL MÓDULO FS PARA CREAR Y LEER ARCHIVOS
// EN SU VERSION ASINCRONA SIN PROMESAS, RECIBE UN CALLBACK, USADO
// PARA MANEJAR EL ERROR Y, EN CASOS, ALGUNA OPERACION MAS
import { existsSync } from "fs";
import fsPromises from "fs/promises";
// EL MODULO FS TIENE SU VERSION CON PROMESAS, USARLO SIEMPRE QUE SE
// PUEDA

// if (!fs.existsSync("textos")) {
//     fs.mkdir("textos", (error) => {
//         if (error) console.log(error.message)
//         else {
//             fs.writeFile("textos/saludo.txt", "hola chicos de coder", { encoding: "utf-8" }, (error) => {
//                 if (error) {
//                     console.log("no se pudo escribir el archivo", error.message)
//                 } else {
//                     console.log("archivo creado exitosamente");

//                 }
//             })
//         }
//     })
// } else {

//     fs.writeFile("textos/saludo.txt", "hola chicos de coder", { encoding: "utf-8" }, (error) => {
//         console.log("archivo creado")
//     })
// }


if (!existsSync("textos")) {
    fsPromises.mkdir("textos")
        .then(() => {
            fsPromises.writeFile("textos/saludo.txt", "hola chicos de coder", { encoding: "utf-8" })
                .then(() => {
                    console.log("archivo creado exitosamente");
                }).catch((error) => {
                    console.log("no se pudo escribir el archivo", error.message)
                })
        }).catch((error) => {
            console.log(error.message)
        })
}

// ESTAREMOS USANDO ESTE MÓDULO PARA HACER NUESTRAS PRIMERAS PERSISTENCIAS
// DE DATOS EN EL EJERCICIO PROPUESTO
