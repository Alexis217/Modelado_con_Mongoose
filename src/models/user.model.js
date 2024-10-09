import { model, Schema } from "mongoose";

// Esquema de usuarios
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// exportamos el modelo
const UserModel = model("users", userSchema);

export default UserModel;