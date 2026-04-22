import { Schema, model } from "mongoose";

const productSchema = new Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    stock: {
        type: Number
    },
    status: {
        type: Boolean
    },
    code: {
        type: String,
        unique: true
    },
    thumbnails: {
        type: [String]
    }

});

export const productsModel = model("product", productSchema);