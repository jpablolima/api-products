const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://127.0.0.1:27017/projetoprodutos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db.then(() => {
    console.log('Conectado com sucesso ao MongoDB')
})