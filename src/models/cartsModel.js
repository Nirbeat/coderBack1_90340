import { Schema, Types, model } from "mongoose";

const cartSchema = new Schema({
    products: [
        {
            product: {
                type: Types.ObjectId,
                ref: "product"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
});

export const cartsModel = model("cart", cartSchema);
