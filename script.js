//Enviar os dados do formulário para o servidor
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        valor: cadastro.valor.value,
        descricao: cadastro.descricao.value
    }
    fetch('http://localhost:4000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
    .then(response => response.status)
    .then(status => {
        if (status === 201) {
            alert('Produto cadastrado com sucesso');
            window.location.reload();
        } else {
            alert('Erro ao cadastrar produtos');
        }
    });
});

fetch('http://localhost:4000/produtos')
.then(response => response.json())
.then(produtos => {
    const tabela = document.getElementById('produtos');
    produtos.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.produto_id}</td>
            <td>${produto.nome}</td>
            <td>${produto.valor}</td>
            <td>${produto.descricao}</td>
            <td><button onclick="deletarProduto(${produto.produto_id})">Deletar</button></td>
        `;
        tabela.appendChild(linha);
    });
});

function deletarProduto(id) {
    fetch(`http://localhost:4000/produtos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 200) {
            alert('Produto deletado com sucesso');
            window.location.reload();
        } else {
            alert('Erro ao deletar produto');
        }
    });
}