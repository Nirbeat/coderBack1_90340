import { Router, urlencoded, json } from "express";
import { uploader } from "../utils.js";
import { productsModel } from "../models/productsModel.js";
// import ProductManager from "../dao/ProductManager.js";

const router = Router();

router.get("/", async (req, res) => {
    const products = await productsModel.find({}).lean();
    res.status(200).json({ products });
});

router.get("/:pid", async (req, res) => {
    const { pid } = req.params;
    const product = await productsModel.findById(pid).lean();
    res.status(200).json({ product });
});

router.delete("/:pid", async (req, res) => {
    const { pid } = req.params;
    const deletedProduct = await productsModel.findByIdAndDelete(pid);
    res.status(200).json({ message: "producto eliminado", deletedProduct });
});

router.use(json(), urlencoded({ extended: true }));

router.post("/",
    uploader.single("imagen"),
    async (req, res) => {
        const product = req.body;
        // product.thumbnails = [req.file.path];//esto da problemas por json
        // const newProduct = await ProductManager.createProduct(product);
        const newProduct = await productsModel.create(product);
        res.status(200).json({ message: "producto agregado", newProduct });
    });

router.put("/:pid", async (req, res) => {
    const { pid } = req.params;
    const updatedProduct = await productsModel.findByIdAndUpdate(pid, req.body, { new: true });
    res.status(200).json({ message: "producto actualizado", updatedProduct });
});

export default router;