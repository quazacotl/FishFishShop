const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const expressHandlebars = require("express-handlebars")
const fishRoutes = require('./routes/fishRoutes')
const adminRoute = require('./routes/adminRoute')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
// const bcrypt = require('bcrypt')
// const AdminUser = require('./models/adminUser')

const PORT = config.get('port') || 3000

const app = express()
const hbs = expressHandlebars.create({
    layoutsDir: "views/layouts",
    defaultLayout: 'main',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(fishRoutes)
app.use(adminRoute)
app.use(categoryRoute)
app.use(productRoute)
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())


async function start () {
    try {
        await mongoose.connect(config.get('dbUrl'), {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })


    } catch (e) {
        console.log(e)
    }
    app.listen(PORT, () => {
        console.log('Server has been started...')
    });
}

start()

// Создание админа
// const salt = bcrypt.genSaltSync();
//
// const adminUser = new AdminUser({
//     login: config.get('adminLogin'),
//     password: bcrypt.hashSync(config.get('adminPassword'), salt)
// })
//
// adminUser.save()

// AdminUser.findOne({login: 'vag'})
//     .then(res => console.log(bcrypt.compareSync(config.get('adminPassword'), res.password)))

