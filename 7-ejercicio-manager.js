// CREAR UNA ENTIDAD QUE PERMITA HACER LAS OPERACIONES DE CREAR
// Y LEER REGISTROS DE USUARIOS EN UN ARCHIVO users.json
import fs from "fs";
import fsPromises from "fs/promises";

class UsersManager {

    constructor(path) {
        this.path = path;
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify([]), { encoding: "utf-8" })
        }
    }

    async getusers() {
        return await fsPromises.readFile(this.path, { encoding: "base64" });
    }

    async addUser(user) {
        let users = await this.getusers();
        users = JSON.parse(users);

        users.push(user);
        return await fsPromises.writeFile(this.path, JSON.stringify(users), { encoding: "utf-8" });

    }
}

console.log(await new UsersManager("estudiantes.json").getusers())