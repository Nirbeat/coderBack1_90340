// CREAR APLICACION EXPRESS PARA CHAT DESDE CERO
import express from "express";
import { __dirname } from "./utils.js";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";
import { engine } from "express-handlebars";
const app = express();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use("/", viewsRouter);

const httpServer = app.listen(3000, () => {
    console.log("server en puerto 3000");
});

const socketServer = new Server(httpServer);

socketServer.on("connection", (clientSocket) => {
    // console.log("nuevo cliente conectado", clientSocket.id);
    clientSocket.on("message", (message) => {
        socketServer.emit("new-message", { message, id: clientSocket.id });
    })
    clientSocket.broadcast.emit("new-user-connected", clientSocket.id);
});
