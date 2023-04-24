const express = require('express');
const port = 3333
const app = express();
const router = require('./router')

app.use(express.json())
app.use(router)

app.get('/tasks', (req, res) => { res.status(200).send('Deu certo!') })

module.exports = app;