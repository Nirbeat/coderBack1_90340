import express from "express";
import fs from "fs";
import fsPromises from "fs/promises";

const app = express();

// CREAR UNA ENTIDAD QUE PERMITA HACER LAS OPERACIONES DE CREAR
// Y LEER REGISTROS DE USUARIOS EN UN ARCHIVO users.json

class UsersManager {

    constructor(path) {
        // this.path = path;
        // if (!fs.existsSync(path)) {
        //     fs.writeFileSync(path, JSON.stringify([]), { encoding: "utf-8" })
        // }
    }

    async getusers() {
        let users = await fsPromises.readFile(this.path, { encoding: "utf-8" });
        return JSON.parse(users);
    }

    async addUser(user) {
        let users = await this.getusers();

        users.push(user);
        await fsPromises.writeFile(this.path, JSON.stringify(users), { encoding: "utf-8" });
        return users;

    }
}

// get, post, put, delete
// CRUD => Create, Read, Update, Delete
app.get("/", (req, res) => {
    res.send("hola")
});

// EL METODO USE DEFINE LOS MIDDLEWARES, FUNCIONES INTERMEDIAS QUE
// SE EJECUTAN ANTES DE LAS FUNCIONES QUE RESPONDEN A LA PETICION
app.use((req, res, next) => {
    req.usersManager = new UsersManager("estudiantes.json");
    // EL METODO NEXT INDICA QUE SE PASE A LA SIGUIENTE FUNCION EN LA
    // CADENA DE MIDDLEWARES
    next();
},
    (req, res, next) => {
        console.log("hola");
        next();
    },
    (req, res, next) => {
        console.log("chau");
        // EL ULTIMO NEXT, SI NO HAY MAS DENTRO DEL USE
        // PASA A LA FUNCION QUE RESPONDE A LA PETICION
        next();
    });

app.get("/api/users", async (req, res, next) => {
    try {
        const users = await req.usersManager.getusers();
        res.status(200).json(users);
    } catch (error) {
        // SI HAY UN ERROR, SE LO PASAMOS AL MIDDLEWARE DE MANEJO DE ERRORES
        // QUE ESTA DEFINIDO MAS ABAJO
        next(error);
    }
});

// MIDDLEWARES
// ESTOS MIDDLEWARES SE EJECUTAN PARA TODAS LAS PETICIONES QUE SE 
// DECLARAN DESPUES DE ELLOS
app.use(
    express.json(),
    express.urlencoded({ extended: true })
);

app.post("/api/users", async (req, res) => {
    const user = req.body;
    const usersData = await req.usersManager.addUser(user);
    res.status(201).json(usersData);
});

app.put("/api/users/:id", (req, res) => {

});

app.delete("/api/users/:id", (req, res) => {

});
// UN MIDDLEWARE AL FINAL DE LAS RUTAS PUEDE SER USADO PARA GESTIONAR
// LOS ERRORES EN UN UNICO LUGAR
app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});