const express = require('express')
const productRoute = express.Router()
const db = require('../../services/db')
const fs = require('fs')


productRoute.get('/', (req, res) => {
    res.send('Home')
})

productRoute.get('/produtos', (req, res) => {

    const data = fs.readFileSync('./services/db.json')
    const productsJson = JSON.parse(data)
    res.send(productsJson)
})

productRoute.post('/produto/aadnew', (req, res) => {
    const data = fs.readFileSync('./services/db.json')
    const productsJson = JSON.parse(data)
    const bodyRequest = req.body

    productsJson.products.push(bodyRequest)

    fs.writeFileSync('./services/db.json', JSON.stringify(productsJson))
    res.send('Product insert success')

})


productRoute.get('/produto/:id', (req, res) => {
    const idProduct = req.params.id;
    let productSearch = ''

    const data = fs.readFileSync('./services/db.json')
    const productsJson = JSON.parse(data)
    productsJson.products.map(index => {
        if (index.id == idProduct) {
            productSearch = index
        }
    })

    if (productSearch != "") {
        res.send(productSearch)
    } else {
        res.send('Product not found')
    }

})







module.exports = productRoute;