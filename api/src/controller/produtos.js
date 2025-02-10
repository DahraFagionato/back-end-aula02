const con = require('../connect');
const express = require('express');

function create(req, res) {
    const { nome, valor, descricao } = req.body;
    const sql = `INSERT INTO produtos (nome, valor, descricao) VALUES ('${nome}', '${valor}', '${descricao}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar produto');
        } else {
            res.status(201).json('Produto cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM produtos';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar produtos');
        } else {
            res.status(200).json(result);
        }
    });
}

function deletarProduto(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM produtos WHERE produto_id=${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao deletar produto');
        } else {
            res.status(200).json('Produto deletado com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    deletarProduto
}