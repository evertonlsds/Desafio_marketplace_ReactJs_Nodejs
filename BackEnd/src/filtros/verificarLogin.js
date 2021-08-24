const conexao = require('../conexao');
const jwt = require ('jsonwebtoken')


const verificarLogin = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).json('Não autorizado');
    }

    try {
        
    } catch (error) {
        return res.status(401).json('Não autorizado'); 
    }
}

module.exports = verificaLogin