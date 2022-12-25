const express = require('express')
const app = express()

let personas = []

//Configuracion EJS
app.use(express.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'ejs')


app.post('/datos', (req, res) => {
    personas.push(req.body)
    console.log(personas);
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('formulario', {personas})
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))