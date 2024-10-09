import { model, Schema } from "mongoose";

// Esquema de ventas
const salesSchema = new Schema({
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    Date: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: "users" },
    employee: { type: Schema.Types.ObjectId, ref: "employees" },
    product: { type: Schema.Types.ObjectId, ref: "products" },
});

// exportamos el modelo
const SalesModel = model("sales", salesSchema);

export default SalesModel;