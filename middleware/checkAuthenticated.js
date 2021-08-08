const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/admin')
};

module.exports = checkAuthenticated