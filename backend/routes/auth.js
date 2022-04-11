const express = require('express')
const router = express.Router()
const { signup, login, logout } = require('../controllers/auth')

// validators
const {runValidation} = require('../validators')
const {growerSignupValidator, growerLogInValidator} = require('../validators/auth')

router.post('/growers/signup', growerSignupValidator, runValidation, signup)
router.post('/growers/login', growerLogInValidator, runValidation, login)
router.get('/grower/logout', logout)

module.exports = router