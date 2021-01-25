const mongoose = require('mongoose')

const product = new mongoose.Schema({

    nome: String,
    valorCompra: String,
    valorVenda: String,
    quantidade: String,
})

let modelProduct = mongoose.model('Product', product)

module.exports = modelProduct;