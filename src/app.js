import express from "express";
import produtosRouter from "./routes/produtosRouter.js";
import logMiddleware from "./middlewares/logMiddleware.js";
import errorHandler from "./middlewares/internalError.js";

const app = express();

app.use(express.json());

app.use(logMiddleware);

app.use("/produtos", produtosRouter);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
