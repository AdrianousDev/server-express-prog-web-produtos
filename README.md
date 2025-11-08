# Rotas Criadas

➤ GET /produtos

Lista todos os produtos ou filtra por categoria usando query string.
Exemplo:

GET http://localhost:3000/produtos
GET http://localhost:3000/produtos?categoria=eletrônicos

➤ GET /produtos/:id

Busca um produto específico pelo ID.
Exemplo:

GET http://localhost:3000/produtos/2

➤ POST /produtos

Cria um novo produto (usa middleware de validação).
Exemplo:

POST http://localhost:3000/produtos
Content-Type: application/json

{
"nome": "Monitor Curvo",
"categoria": "eletrônicos"
}

➤ DELETE /produtos/:id

Remove um produto específico.
Exemplo:

DELETE http://localhost:3000/produtos/3

💡 Conceitos Estudados
🔹 Roteamento

Define como a aplicação responde a cada URL.
Neste projeto, o roteamento foi modularizado com Router() no arquivo routes/produtosRouter.js, deixando o código mais organizado.

🔹 Parâmetros de Rota

São partes dinâmicas da URL, como :id.
Exemplo: /produtos/3 → acessa o produto com ID 3.
No Express, são lidos com req.params.

🔹 Query Strings

Servem para filtros e buscas.
Exemplo: /produtos?categoria=eletrônicos
No Express, são lidas com req.query.

🔹 Middlewares

Funções que executam entre a requisição e a resposta:

Global: loga todas as requisições.

De rota: valida o corpo da requisição (campos obrigatórios).

De erro: trata erros internos de forma centralizada.
