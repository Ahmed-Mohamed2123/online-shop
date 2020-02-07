const authModul = require('../models/auth.modul')

exports.getSignup = (req, res, next) => {
    res.render('signup')
};

exports.postSignup = (req, res, next) => {
    authModul.createNewUser(req.body.username, req.body.email, req.body.password)
        .then(() => res.redirect('/login'))
        .catch(err => {
            console.log(err)
            res.redirect('/signup')
        })
};

exports.getLogin = (req, res, next) => {
    authModul.login(req.body.email, req.body.password)
        .then((id) => {
            req.session.userId = id
            res.redirect('/login')
        })
        .catch(err => {
            console.log(err)
            res.render('/login')
        })
}