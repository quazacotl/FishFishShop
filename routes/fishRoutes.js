const {Router} = require('express')
const router = Router()


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Fish Butchery'
  })
});

router.get('/about', (req, res) => {
  res.render('about-page', {
    title: 'О нас',
    isAbout: true
  })
});

router.get('/cooled', (req, res) => {
  res.render('cooled-page', {
    title: 'Охлаждённая рыба',
  })
});

router.get('/caviar', (req, res) => {
  res.render('caviar-page', {
    title: 'Икра',
  })
});

router.get('/fermentation', (req, res) => {
  res.render('fermentation-page', {
    title: 'Лаборатория ферментации',
  })
});

router.get('/seafood', (req, res) => {
  res.render('seafood-page', {
    title: 'Морепродукты',
  })
});

router.get('/contacts', (req, res) => {
  res.render('contacts-page', {
    title: 'Контакты',
  })
});

router.get('/beverage-page', (req, res) => {
  res.render('beverage', {
    title: 'Напитки',
  })
});

module.exports = router