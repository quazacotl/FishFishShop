const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require("config")
const AdminUser = require('../models/adminUser')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('jwt')
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await AdminUser.findById(payload.userId).select('login id')

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log(e)
            }

        })
    );
}