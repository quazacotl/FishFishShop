const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const expressHandlebars = require("express-handlebars")
const bodyParser = require("body-parser");
const fishRoutes = require('./routes/fishRoutes')
const adminRoute = require('./routes/adminRoute')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')
const bcrypt = require('bcrypt')
const MongoStore = require('connect-mongo');
const AdminUser = require('./models/adminUser')
// const checkAuthenticated = require('./middleware/chechAuthenticated')

const PORT = config.get('port') || 3000

const initializePassport = require('./middleware/passport-config')

const app = express()
const hbs = expressHandlebars.create({
    layoutsDir: "views/layouts",
    defaultLayout: 'main',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
initializePassport(passport)
app.use(flash())
app.use(session({
    secret: config.get('sessionSecret'),
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: config.get('dbUrl')})
}))

app.use(passport.initialize())
app.use(passport.session())



app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(fishRoutes)
app.use(adminRoute)
app.use(categoryRoute)
app.use(productRoute)

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

