const { check } = require('express-validator')

exports.growerSignupValidator = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('First Name is required'),
    check('lastName')
        .not()
        .isEmpty()
        .withMessage('Last Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
]

exports.growerLogInValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
]