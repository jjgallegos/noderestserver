require('./config/config');
const express = require('express')
const { json } = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuarios', function(req, res) {
    res.json('get World')
})
app.post('/usuarios', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'necesita el nombre'
        })
    } else {
        res.json({
            'parametro': parametro
        })
    }

})
app.put('/usuarios/:valor', function(req, res) {
    let parametro = req.params.valor

    res.json({
        'parametro': parametro
    })



})

app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto', process.env.PORT);
})