import mongoose from "mongoose";

const notaSchema = new mongoose.Schema(
    {
        id: { 
            type: String 
        },
        titulo: {
            type: String,
            required: [true, "O título da nota é obrigatório"]
        },
        descricao: {
            type: String,
            required: [true, "A descrição é obrigatória"]
        }
    }
)

const notas = mongoose.model("notas", notaSchema);

export default notas;