import UsersManager from "../dao/UsersManager.js";

export function attachUserManagerToRequest(req, res, next) {
    req.usersManager = UsersManager;
    next();
}