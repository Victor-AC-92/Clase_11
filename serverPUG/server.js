const express = require('express')
const fs = require('fs')
const app = express()

class Producto {
    constructor (nombre, precio, url){
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

let productos = []

//Configuracion PUG
app.use(express.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'pug')


app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos);
    res.redirect('/productos')
})

app.get('/productos', (req, res) => {
    res.render('tabla', {productos})
})

app.get('/', (req, res) => {
    res.render('formulario', {productos})
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))