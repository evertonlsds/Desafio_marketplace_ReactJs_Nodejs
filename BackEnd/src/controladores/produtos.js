const conexao = require ('../conexao');


const listarProdutos = async (req, res) => {

}

const obterProduto = async (req, res) => {

}

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const {nome, estoque, preco, categoria, descricao, image} = req.body;

    if(!nome){
        return res.status(404).json('O campo nome é obrigatório')
    }

    if(!estoque){
        return res.status(404).json('O campo estoque é obrigatório')
    }

    if(!preco){
        return res.status(404).json('O campo preço é obrigatório')
    }

    if(!descricao){
        return res.status(404).json('O campo descrição é obrigatório')
    }

    try {
        const query = 'insert into produtos (usuario_id, nome, estoque, preco, categoria, descricao, image) values($1, $2, $3, $4, $5, $6, $7)';
        const produto = await conexao.query(query, [usuario.id, nome, estoque, preco, categoria, descricao, image]);

        if(produto.rowCount === 0){
            return res.status(400).json('O produto não foi cadastrado.') 
        }

        return res.status(200).json('O produto foi cadastrado com sucesso.') 
        
    } catch (error) {
        return res.status(400).json(error.message) 
    }

}

const atualizarProduto = async (req, res) => {

}

const excluirProduto = async (req, res) => {

}


module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
}