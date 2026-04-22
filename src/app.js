import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import usersRouter from "./routes/users.routes.js";
import viewsRouter from "./routes/views.routes.js";
import productsRouter from "./routes/products.routes.js";
import cartsRouter from "./routes/carts.routes.js";
import { connect } from "mongoose";

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "handlebars");
app.engine("handlebars", handlebars.engine({
    partialsDir: __dirname + "/views/partials",
    helpers: {
        stockAvailable: (stock) => stock > 0
    }
}));
app.set("views", __dirname + "/views");

app.use("/", viewsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.use((error, req, res, next) => {
    res.status(500).json({ error });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
    connect("mongodb+srv://maximilianomartindev_db_user:LObIOcpHZ5wKJDok@backend1.dfm2pp8.mongodb.net/90340")
        .then(() => console.log("conectado a DB"))
        .catch(error => console.log(error))
});