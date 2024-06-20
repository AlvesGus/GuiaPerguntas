const bodyParser = require('body-parser')
const urlencoded = require('body-parser/lib/types/urlencoded')
const express = require('express')
const app = express()

//avisando ao Express para user EJS como View Engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Config. bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.post('/salvarperguntas', (req, res) => {
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  res.send('form recebido titulo: ' + titulo + ' ' + ' descricao: ' + descricao)
})

app.listen(8080, () => {
  console.log('Carregou')
})
