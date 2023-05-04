const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const consign = require('consign');
const passport = require('./config/passport');

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log(`Rodando na porta ${port}`)
})