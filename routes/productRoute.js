const {Router} = require('express')
const controller = require('../controllers/product')
const router = Router()

router.get('/', controller.getAll)
router.get('/:categoryId', controller.getByCategoryId)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.delete('/:id', controller.remove)
router.patch('/:id', controller.update)

module.exports = router