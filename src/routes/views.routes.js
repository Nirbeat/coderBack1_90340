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

// router.get("/otra", (req, res) => {
//     res.render("otra", {
//         titulo: "otra vista",
//         mensaje: "hola desde otra vista",
//         numero: 456
//     });
// });

router.get("/products", async (req, res) => {

    const products = await ProductManager.getProducts("products.json");
    console.log(products)
    // let products = [
    //     { id: 1, title: "producto 1", price: 100, status: true, stock: 10 },
    //     { id: 2, title: "producto 2", price: 200, status: false, stock: 0 },
    //     { id: 3, title: "producto 3", price: 300, status: true, stock: 5 }
    // ];

    // products = null;
    res.render("products", {
        products,
        style: "/css/products.css"

    });
});
export default router;