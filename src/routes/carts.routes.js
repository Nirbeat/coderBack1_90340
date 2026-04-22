import { Router, json, urlencoded } from "express";
import { cartsModel } from "../models/cartsModel.js";
import { productsModel } from "../models/productsModel.js";

const router = Router();

router.get("/:cid", async (req, res) => {
    const { cid } = req.params;
    const cart = await cartsModel.findOne({ _id: cid })
        .populate("products.product");
    res.status(200).json({ cart });
});

router.post("/", async (req, res) => {
    const newCart = await cartsModel.create({});
    res.status(200).json({ message: "carrito agregado", newCart });
});

router.use(json(), urlencoded({ extended: true }));

router.post("/:cid/product/:pid", async (req, res) => {
    const { cid, pid } = req.params;
    const requiredProduct = await productsModel.findById(pid);
    if (!requiredProduct) throw new Error("producto inexistente");
    const requiredCart = await cartsModel.findById(cid);
    if (!requiredCart) throw new Error("carrito inexistente");
    requiredCart.products.push({ product: requiredProduct._id });
    const updatedCart = await requiredCart.save();
    res.status(200).json(updatedCart);
});
export default router;