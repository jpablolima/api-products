const express = require('express')
const productRoute = express.Router()
const db = require('../../services/db')
const productModel = require('../../model/ProductModel')
const { response } = require('express')



productRoute.get('/', (req, res) => {
    res.send('Home')
})



productRoute.get('/produto/all', (req, res) => {

    productModel.find({}).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})


productRoute.post('/produto/addnew', (req, res) => {

    if (req.body.nome == "" || req.body.valorCompra == "" || req.body.valorVenda == "" || req.body.quantidade == "") {
        res.send('Informe todos os valores do produto!')
        return
    }

    const newProduct = new productModel({

        nome: req.body.nome,
        valorCompra: req.body.valorCompra,
        valorVenda: req.body.valorVenda,
        quantidade: req.body.quantidade
    })

    newProduct.save().then(() => {
        res.send('Produto cadastrado com sucesso')
    }).catch((err) => {
        res.send('Error ao cadastrar produto' + err)
    })


})




module.exports = productRoute;