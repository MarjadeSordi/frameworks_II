const express = require('express')
const app = express()
const port = 3000
var router = express.Router();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let listaProdutos = [];
let geradorId = 1; 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/produtos', function (req, res) {
    res.send(listaProdutos);
});

app.post('/produtos', function (req, res) {
    listaProdutos.push(req.body)
    res.status(201).json(req.body)
})

app.get('/produtos/:id', function (req, res) {
    res.send('Buscando Produtos' + req.params.id)
})


app.put('/produtos/:id', function (req, res) {
    res.send('Alterando Produto' + req.params.id)
})

app.delete('/produtos/:id', function (req, res) {
    res.send('Deletando produto' + req.params.id)
})


