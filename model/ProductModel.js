const mongoose = require('mongoose')

const product = new mongoose.Schema({

    nome: String,
    valorCompra: String,
    valorVenda: String,
    quantidade: Number,
})

let modelProduct = mongoose.model('Product', product)

module.exports = modelProduct;