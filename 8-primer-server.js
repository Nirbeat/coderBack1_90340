// CREAMOS UN SERVER SENCILLO CON EL MODULO NATIVO HTTP
import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    res.end("<h1>bienvenidos al servidor</h1>")
});

server.listen(3000, () => {
    console.log("servidor escuchando en el 3000")
})