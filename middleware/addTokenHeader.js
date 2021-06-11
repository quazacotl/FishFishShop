const jwt = require('jsonwebtoken')
const config = require('config')
const {token} = require('../controllers/admin')

module.exports.addTokenHeader = async (req, res, next) => {
    console.log(token)
    if (token && await jwt.verify(token, config.get('jwt'))) {
        return res.headers.authorization = `Bearer ${token}`
    }
    next()
}

