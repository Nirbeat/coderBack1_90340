import { Router } from "express";
import ProductManager from "../dao/ProductManager.js";
const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        titulo: "index",
        mensaje: "hola desde index",
        numero: 123,
        condicion: true
    });
});

router.get("/products", async (req, res) => {

    const products = await ProductManager.getProducts("products.json");
    console.log(products);

    res.render("products", {
        products,
        style: "/css/products.css"

    });
});

router.get("/products/create", (req, res) => {
    res.render("products-form");
});
export default router;