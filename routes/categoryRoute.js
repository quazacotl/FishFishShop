const {Router} = require('express')
const controller = require('../controllers/category')
const router = Router()

router.get('/', controller.getAll)
// router.get('/:categoryId', controller.getById)
router.post('/', controller.create)
router.delete('/:id', controller.remove)

module.exports = router