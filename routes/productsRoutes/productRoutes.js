const express = require('express')
const productRoute = express.Router()
const db = require('../../services/db')
const productModel = require('../../model/ProductModel')




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

productRoute.put('/produto/edit/:id', (req, res) => {
    const idProduct = req.params.id

    if (idProduct == "" || idProduct == null || idProduct == undefined) {
        res.send('Id não encontrado, favor informar id corretamente')
        return
    }


    const newProduct = {
        nome: req.body.nome,
        valorCompra: req.body.valorCompra,
        valorVenda: req.body.valorVenda,
        quantidade: req.body.quantidade
    }

    productModel.update({ _id: idProduct }, newProduct)
        .then(() => { res.send('Produto atualizado com Sucesso!') })
        .catch((err) => { res.send('Error ao atualizar o produto!' + err) })
})

productRoute.delete('/produto/delete/:id', (req, res) => {
    const idProduct = req.params.id

    productModel.deleteOne({ _id: idProduct })
        .then(() => { res.send('Produto deletado com sucesso!') })
        .catch((err) => { res.send('Erro ao deletar produto' + err) })
})


module.exports = productRoute;