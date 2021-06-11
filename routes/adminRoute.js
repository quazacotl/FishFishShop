const {Router} = require('express')
const controller = require('../controllers/admin')
const router = Router()
const multer  = require('multer')
const passport = require('passport')
const upload = multer()

router.get('/admin', controller.showAdminPage)

router.post('/admin', upload.none(), controller.login)

router.get('/admin/crm',
    passport.authenticate('jwt', {session: false}),
    controller.showCrmPage)

// router.get('/admin/crm/overview', controller.showOverviewPage)
//
// router.get('/admin/crm/category', controller.showCategoryPage)
//
// router.get('/admin/crm/products', controller.showProductsPage)
//
// router.get('/admin/crm/orders', controller.showOrdersPage)



module.exports = router