import NotFound from "../errors/NotFound.js"
import { notas } from "../models/index.js";

class NotaController{

    static GetNotas = async(req, res, next) => {
        
        try {
            
            const notasEncontradas = await notas.find();

            if(notasEncontradas != null){
                res.status(200).json(notasEncontradas); 
                return;
            }
                  
            res.status(404).json({ message: "Não foram encontradas notas"});
            
        } catch (error) {
            next(error);
        }
    }

    static GetNotaById = async(req, res, next) =>{
        try {
            const id = req.params.id;

            const notaEncontrada = await notas.findById(id);

            if(notaEncontrada != null){
                res.status(200).json(notaEncontrada);
                return;
            }

            next(new NotFound("Nota não encontrada"));

        } catch (error) {
            next(error);
        }
    }

    static CreateNota = async(req, res, next) =>{
        
        try {
            
            let nota = new notas(req.body);

            const notaResultado = await nota.save();

            res.status(201).send(notaResultado.toJSON());
        } catch (error) {
            next(error);
        }
    }

    static UpdateNota = async(req, res, next) => {

        try {
            
            const id = req.params.id;

            const notaEncontrada = await notas.findByIdAndUpdate(id, {$set: req.body});

            if(notaEncontrada != null){
                res.status(200).json({ message: "Nota atualizada com sucesso" });
                return;
            }

            next(new NotFound("Nota não encontrada"));

        } catch (error) {
            next(error);
        }
    }

    static DeleteNota = async(req, res, next) => {

        try {
            
            const id = req.params.id;

            const notaEncontrada = await notas.findByIdAndDelete(id);

            if(notaEncontrada != null){
                res.status(200).json({ message: "Nota deletada com sucesso" });
                return;
            }

            next(new NotFound("Nota não encontrada"));

        } catch (error) {
            next(error);
        }
    }
}

export default NotaController;