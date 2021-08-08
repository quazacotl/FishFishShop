const {Router} = require('express')
const passport = require('passport')
const controller = require('../controllers/admin')
const router = Router()
const multer  = require('multer')
const checkAuthenticated = require('../middleware/checkAuthenticated')
const checkNotAuthenticated = require('../middleware/checkNotAuthenticated')

const upload = multer()

router.get('/admin', checkNotAuthenticated, controller.showAdminPage)

router.post('/admin', upload.none(), passport.authenticate('local', {
    successRedirect: '/crm',
    failureRedirect: '/admin' }
))

router.get('/crm', checkAuthenticated, controller.showCrmPage)

router.get('/admin/catalog',
    // passport.authenticate('jwt', {session: false}),
    controller.showCatalogPage)

router.get('/admin/orders',
    // passport.authenticate('jwt', {session: false}),
    controller.showOrdersPage)

// router.get('/admin/crm/overview', controller.showOverviewPage)
//
// router.get('/admin/crm/category', controller.showCategoryPage)
//
// router.get('/admin/crm/products', controller.showProductsPage)
//
// router.get('/admin/crm/orders', controller.showOrdersPage)



module.exports = router