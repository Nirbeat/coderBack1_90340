import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import usersRouter from "./routes/users.routes.js";
import viewsRouter from "./routes/views.routes.js";

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "handlebars");
app.engine("handlebars", handlebars.engine({ partialsDir: __dirname + "/views/partials", helpers: { ifCond: (a, b) => a === b } }));
app.set("views", __dirname + "/views");

// app.get("/params/:saludo/loquesea/:destinatario", async (req, res) => {
//     const { saludo, destinatario } = req.params;
//     res.send(`${saludo} ${destinatario}, como te va?`)

// });

app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
// app.use("/api/products", productsRouter);

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});