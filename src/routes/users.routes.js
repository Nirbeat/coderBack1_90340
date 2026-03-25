import { Router, json, urlencoded } from "express";
import { attachUserManagerToRequest } from "../middlewares/users.middleware.js";

const router = Router();

router.use(attachUserManagerToRequest)

router.get("/", async (req, res, next) => {
    try {
        const users = await req.usersManager.getusers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", (req, res) => {
    let { id } = req.params;
    id = parseInt(id)
    try {
        req.usersManager.deleteUserById(id);
    } catch (error) {
        next(error)
    }
});

router.use(json(), urlencoded({ extended: true }));

router.post("/", async (req, res) => {
    const user = req.body;
    const usersData = await req.usersManager.addUser(user);
    res.status(201).json(usersData);
});

router.put("/:id", async (req, res) => {

});

export default router;