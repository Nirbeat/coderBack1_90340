// IMPORTAR EVENTS Y CREAR EMITTER
const EventEmitter = require("events");

// LAS ESCUCHAS SIEMPRE VAN PRIMERO
const emisor = new EventEmitter();

// ESCUCHA
emisor.on("saludo", (nombre) => {
    console.log(`hola ${nombre}`);
});

// EMISOR
emisor.emit("saludo", "martin");