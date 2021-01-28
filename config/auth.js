module.exports = {
    ensureAuthenticated : function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
    res.status(409).send({ message: 'Unauthorized!' })
    }
}