const AdminUser = require('../models/adminUser')
const jwt = require('jsonwebtoken')
const config = require("config")
const bcrypt = require('bcrypt')
let token = null;




module.exports.login = async function (req, res) {
    const candidate = await AdminUser.findOne({login: req.body.username})
    if (candidate && bcrypt.compareSync(req.body.password, candidate.password)) {
        token = jwt.sign({
            login: candidate.login,
            userId: candidate._id
        }, config.get('jwt'), {expiresIn: 60 * 60})
        res.status(200).json({token})

    } else {
        res.status(404).json({
            message: 'Неверный логин или пароль'
        })
    }
}


module.exports.showAdminPage = function (req, res) {
    if (token && jwt.verify(token, config.get('jwt'))) {
        res.render('crm-page', {
            title: 'Admin panel',
            layout: 'admin'
        })
    } else {
        res.render('admin-page-login', {
            title: 'Admin',
            layout: 'admin'
        });
    }

}

module.exports.showCrmPage = function (req, res) {

    res.render('crm-page', {
        title: 'Admin panel',
        layout: 'admin'
    })
    // res.status(200).json({message: 'ok'})
}
