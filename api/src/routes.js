const express = require('express');

const routes = express.Router();

const Produto = require('./controller/produtos');

routes.get('/', (req, res) => {
    res.send('API Produtos Respondendo');
});

routes.post('/produtos', Produto.create);
routes.get('/produtos', Produto.read);
routes.delete('/produtos/:id', Produto.deletarProduto);

module.exports = routes;