<h1 align="center">Rotas Criadas</h1>
<h2>➤ <span style="color:#00BFFF">GET</span> <code>/produtos</code></h2>

Lista todos os produtos ou filtra por categoria usando <span style="color:#FFD700">query string</span>.
<b>Exemplo:</b>

GET http://localhost:3000/produtos
GET http://localhost:3000/produtos?categoria=eletrônicos

<h2>➤ <span style="color:#00BFFF">GET</span> <code>/produtos/:id</code></h2>

Busca um produto específico pelo <span style="color:#ADFF2F">ID</span>.
<b>Exemplo:</b>

GET http://localhost:3000/produtos/2

<h2>➤ <span style="color:#32CD32">POST</span> <code>/produtos</code></h2>

Cria um novo produto (usa <span style="color:#FF69B4">middleware</span> de validação).
<b>Exemplo:</b>

POST http://localhost:3000/produtos
Content-Type: application/json

{
"nome": "Monitor Curvo",
"categoria": "eletrônicos"
}

<h2>➤ <span style="color:#FF4500">DELETE</span> <code>/produtos/:id</code></h2>

Remove um produto específico.
<b>Exemplo:</b>

DELETE http://localhost:3000/produtos/3

<h1 align="center">Conceitos Estudados</h1>
🔹 <span style="color:#00CED1">Roteamento</span>

Define como a aplicação responde a cada URL.
Neste projeto, o roteamento foi modularizado com <code>Router()</code> no arquivo
<code>routes/produtosRouter.js</code>, deixando o código mais organizado.

🔹 <span style="color:#ADFF2F">Parâmetros de Rota</span>

São partes dinâmicas da URL, como <code>:id</code>.
<b>Exemplo:</b> <code>/produtos/3</code> → acessa o produto com ID 3.
No Express, são lidos com <code>req.params</code>.

🔹 <span style="color:#FFD700">Query Strings</span>

Servem para filtros e buscas.
<b>Exemplo:</b> <code>/produtos?categoria=eletrônicos</code>
No Express, são lidas com <code>req.query</code>.

🔹 <span style="color:#FF69B4">Middlewares</span>

Funções que executam entre a requisição e a resposta:

• <b>Global:</b> loga todas as requisições.
• <b>De rota:</b> valida o corpo da requisição (campos obrigatórios).
• <b>De erro:</b> trata erros internos de forma centralizada.
