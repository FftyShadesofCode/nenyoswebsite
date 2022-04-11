const Grower = require('../models/grower')
const shortId = require('shortid')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

exports.signup = (req, res) => {
    Grower.findOne({
        email: req.body.email
    }).exec((err, grower) => {
        if(grower) {
            return res.status(400).json({
                error: 'Email is already used'
            })
        }

        const { firstName, lastName, email, password } = req.body
        let username = shortId.generate()
        let profile = `${process.env.CLIENT_URL}/profile/${username}`

        let newGrower = new Grower({
            firstName, lastName, email, password, profile, username
        })
        newGrower.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            res.json({
                message: 'Signup success! Please Log In!'
            })
        })
    })
}

exports.login = (req, res) => {
    const { email, password } = req.body
    Grower.findOne({ email }).exec((err, grower) => {
        if (err || grower) {
            return res.status(400).json({
                error: 'Grower with that email does not exist. Please sign up.'
            })
        }
        if(!grower.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password do not match.'
            })
        }
        const token = jwt.sign({ _id: grower._id }, process.env.JWT_SECRET, { expireIn: '1d' })

        res.cookie('token', token, { expiresIn: '1d' })
        const { _id, firstName, lastName, username, email, role } = grower
        return res.json({
            token,
            grower
        })
    })
}

exports.logout = (req, res) => {
    res.clearCookie('token')
    res.json({
        message: 'Logout Success'
    })
}

exports.requireLogIn = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    growerProperty: 'auth'
})