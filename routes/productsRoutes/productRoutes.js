const express = require('express')
const listProdutos = express.Router()
const fs = require('fs')


listProdutos.get('/', (req, res) => {
    res.send('Home')
})

listProdutos.get('/produtos', (req, res) => {

    const data = fs.readFileSync('./services/db.json')
    const productsJson = JSON.parse(data)
    res.send(productsJson)
})

listProdutos.post('/produto/aadnew', (req, res) => {
    const data = fs.readFileSync('./services/db.json')
    const productsJson = JSON.parse(data)
    const bodyRequest = req.body

    productsJson.products.push(bodyRequest)


    fs.writeFileSync('./services/db.json', JSON.stringify(productsJson))
    res.send('Product insert success')

    // console.log(bodyRequest)

})


module.exports = listProdutos;