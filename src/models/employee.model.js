import { model, Schema } from "mongoose";

// Esquema de empleados
const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    hireDate: { type: Date, required: true },
});

// exportamos el modelo
const EmployeeModel = model("employees", employeeSchema);

export default EmployeeModel;