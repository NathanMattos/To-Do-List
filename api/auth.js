const { authSecret } = require('./../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const user = require('./user');

module.exports = app => {
    const signin = async (req, res) => {
       if (!req.body.email || !req.body.password) {
            console.log(req.body.email)
            console.log(req.body.password)
            return res.status(400).send('Dados incompletos!')
       }


        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send('Usuário ou senha inválidos!')
                }
                const payload = { id: user.id }
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret)
                })
            })
        } else {
            return res.status(400).send('Usuário ou senha inválidos!')
        }
    }
    return { signin }
}