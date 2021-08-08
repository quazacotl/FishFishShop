const AdminUser = require('../models/adminUser')
const passport = require('passport')
const config = require("config")
const bcrypt = require('bcrypt')

// module.exports.login = async function (req, res) {
//     const candidate = await AdminUser.findOne({login: req.body.username})
//     if (candidate && bcrypt.compareSync(req.body.password, candidate.password)) {
//         const token = jwt.sign({
//             login: candidate.login,
//             userId: candidate._id
//         }, config.get('jwt'), {expiresIn: "1 hour"})
//         res.status(200).json({token})
//         // res.redirect('/crm')
//
//     } else {
//         res.status(404).json({
//             message: 'Неверный логин или пароль'
//         })
//     }
// }


module.exports.showAdminPage = function (req, res) {
    res.render('admin-page-login', {
        title: 'Admin',
        layout: 'admin'
    });
}

module.exports.showCrmPage = function (req, res) {
    res.render('review-page', {
        title: 'Admin panel',
        layout: 'crm',
        active: true
    })
}

module.exports.showCatalogPage = function (req, res) {
    res.render('admin-catalog-page', {
        title: 'Admin panel',
        layout: 'crm',
        active: true
    })
}

module.exports.showOrdersPage = function (req, res) {
    res.render('admin-orders-page', {
        title: 'Admin panel',
        layout: 'crm',
        active: true
    })
}
