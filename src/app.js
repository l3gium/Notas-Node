import express from "express"
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorsManipulator from "./middlewares/errorsManipulator.js";
import NotFound from "./errors/NotFound.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco realizada com sucesso');
})

const app = express();
app.use(express.json());
routes(app);

app.use(NotFound);

app.use(errorsManipulator)

export default app;