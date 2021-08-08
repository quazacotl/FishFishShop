const LocalStrategy  = require('passport-local').Strategy
const AdminUser = require('../models/adminUser')
const bcrypt = require('bcrypt')

function initialize(passport) {
    const authenticateUser = async (username, password, done) => {
        const user = await AdminUser.findOne({login: username})
        if (!user) {
            return done(null, false, { message: 'No user with that login' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'No user with that password' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({}, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await AdminUser.findById(id)
            return done (null, user)
        }
        catch (e) {
            return done(e)
        }
    })
}

module.exports = initialize