CREATE DATABASE produtos;
USE produtos;

CREATE TABLE produtos(
    produto_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor decimal(10,2) NOT NULL,
    descrição VARCHAR(255) NOT NULL
);