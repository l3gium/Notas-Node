import express from "express";
import NotaController from "../controllers/notasController.js";

const router = express.Router();

router
    .get("/notas", NotaController.GetNotas)
    .get("/notas/:id", NotaController.GetNotaById)
    .post("/notas", NotaController.CreateNota)
    .put("/notas/:id", NotaController.UpdateNota)
    .delete("/notas/:id", NotaController.DeleteNota)

export default router;