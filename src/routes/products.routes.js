import { Router, urlencoded, json } from "express";
import { uploader } from "../utils.js";
import ProductManager from "../dao/ProductManager.js";

const router = Router();

router.use(json(), urlencoded({ extended: true }));

router.post("/",
    uploader.single("imagen"),
    async (req, res) => {
        const product = req.body;
        product.thumbnails = [req.file.path];
        const newProduct = await ProductManager.createProduct(product);
        res.status(200).json({ message: "producto agregado", newProduct });
    });

export default router;