const express = require('express')
const app = express()
const port = 3000
var router = express.Router();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});


app.get('/user/:id', function (req, res) {
    res.send('OK')
})

app.post('/post', function (req, res) {
    res.send('POST request to homepage')
})

app.put('/put', function (req, res) {
    res.send('PUT request to homepage')
})

app.delete('/delete', function (req, res) {
    res.send('DELETE request to homepage')
})


