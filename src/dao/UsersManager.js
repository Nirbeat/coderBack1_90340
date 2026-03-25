import fs from "fs";
import fsPromises from "fs/promises";
import { GenericManager } from "./GenericManager.js";

class UsersManager extends GenericManager {

    constructor(filePath) {
        super(filePath)
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

    async updateUserById(id, update) {
        const users = await this.getusers();
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...update };
            await fsPromises.writeFile(this.path, JSON.stringify(users), { encoding: "utf-8" });
            return users;
        }
        throw new Error("Usuario no encontrado");
    }

    async deleteUserById(id) {
        const users = await this.getusers();
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            await fsPromises.writeFile(this.path, JSON.stringify(users), { encoding: "utf-8" });
            return users;
        }
        throw new Error("Usuario no encontrado");
    }
}

export default new UsersManager("users.json");