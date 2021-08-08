const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/crm')
    }
    return next()
};

module.exports = checkNotAuthenticated