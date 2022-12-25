const express = require('express')
const app = express()

class Producto {
    constructor (title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}

let productos = []

//Configuracion EJS
app.use(express.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'ejs')


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

/* let btn_element = getElementById("btn-back");

btn_element.onclick = () => {
    app.get('/', (req, res) => {
        res.render('formulario', {productos})
    })
}; */

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))