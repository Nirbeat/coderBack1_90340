// LOS MÓDULOS NATIVOS SON AQUELLOS QUE YA VIENEN PARA USARSE EN NODE
// ES DECIR, EL CONJUNTO DE UTILIDADES QUE YA NOS DA EL MISMO
// ENTORNO PARA EMPEZAR A TRABAJAR CON JS DESDE EL SERVIDOR

// ÉSTOS SON ALGUNOS EJEMPLOS DE MÓDULOS NATIVOS

// -http => para levantar un servidor
// -crypto => para encriptado de datos
// -fs => para manipular el sistema de archivos
// -os => para acceder al sistema operativo

// COMO EJEMPLO VEAMOS QUE DATA PODEMOS TENER DEL MODULO OS

// const os = require("os");
// const crypto = require("crypto");

// console.log(crypto.createHash("sha256").update("hola").digest("base64"));

// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.freemem());

// -------------------------------------------------------------
// ALGUNOS DE ESTOS MÓDULOS HAN SIDO SUPERADOS O MEJORADOS POR
// LIBRERÍAS CREADAS POR LA COMUNIDAD, POR EJEMPLO, SUELE SER MEJOR
// USAR LA LIBRERIA EXPRESS EN LUGAR DE HACER UN SERVIDOR DESDE
// CERO CON HTTP, O USAR BCRYPT PARA EL HASHEADO DE DATOS
// ESTOS MODULOS LOS ESTAREMOS USANDO TODO EL TIEMPO Y SON LLAMADOS
// MÓDULOS DE TERCEROS
