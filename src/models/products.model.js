import { Schema,model } from "mongoose";

// Esquema de productos
const productsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
});

// exportamos el modelo
const ProductModel = model('products', productsSchema);

export default ProductModel;