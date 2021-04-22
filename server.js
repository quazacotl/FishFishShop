const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const expressHandlebars = require("express-handlebars")
const mainPage = require('./routes/fishRoutes')
const path = require('path')
const cors = require('cors')

const PORT = config.get('port') || 3000

const app = express()
const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(mainPage)
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

async function start () {
    try {
        await mongoose.connect(config.get('dbUrl'), {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log('Server has been started...')
        });

    } catch (e) {
        console.log(e)
    }
}

start()

