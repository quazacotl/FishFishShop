const {Router} = require('express')
const router = Router()
// const product = require('../models/product')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Fish Butchery'
  })
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'about',
    isAbout: true
  })
});

router.get('/contacts', (req, res) => {
  res.render('contacts', {
    title: 'contacts',
    isContacts: true
  })
});

module.exports = router