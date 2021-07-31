const {Router} = require('express')
const router = Router()
const multer = require('multer')
const storage = require('../utils/multerStorage')
const upload = multer({ storage: storage })
const controller = require('../controllers/category')


router.get('/crm/category/get-categories', upload.none(), controller.getAll)
// router.get('/:categoryId', controller.getById)
router.post('/crm/category/create-category', upload.single('categoryImg'), controller.create)
router.delete('/crm/category/:id', controller.remove)

module.exports = router