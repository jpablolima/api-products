const express = require('express')
const productRoute = require('./routes/productsRoutes/productRoutes')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(productRoute)



app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})