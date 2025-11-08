import express from "express";
import { produtos } from "../data/produtos.js";
import validarProduto from "../middlewares/validarProduto.js";

const router = express.Router();

// Tudo ou filtrado por categoria via query string
// Ex: http://localhost:3000/produtos?categoria=eletrônicos -> personalizações
router.get("/", (req, res) => {
  const { categoria } = req.query; // { categoria: "" }
  if (categoria) {
    const filtrados = produtos.filter(
      (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
    return res.json(filtrados);
  }
  res.json(produtos);
});

// "/:id" -> específico geral
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);
  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }
  res.json(produto);
});

// POST /produtos -> criar novo produto + (middleware de rota -> segurança de festa fazendo a revista)
router.post("/", validarProduto, (req, res) => {
  const novo = { id: produtos.length + 1, ...req.body };
  produtos.push(novo);
  res.status(201).json(novo);
});

// DELETE /produtos/:id -> remover produto
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 1) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }
  res.status(204).send();
});

export default router;
