const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Member', Schema({
    _id: Schema.Types.ObjectId,
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function (text) {
                return text.length > 0
            },
            message: 'Please enter a valid Last Name.'
        },
        firstName: {
            type: String,
            required: true,
            validate: {
                validator: function (text) {
                    return text.length > 0
                },
                message: 'Please enter a valid First Name.'
            }
        },
        address: {
            type: String,
            validate: {
                validator: function (text) {
                    return text.length > 0
                },
                message: 'Please enter a valid Street Address.'
            }
        },
        city: {
            type: String,
            validate: {
                validator: function(text) {
                    return text.length > 0
                }
            },
            message: 'Please enter a valid City.'
        },
        state: {
            type: String,
            validate: {
                validator: function(text) {
                    return text.length > 0
                }
            },
            message: 'Please enter a valid State.'
        },
        zipCode: {
            type: String,
            validate: {
                validator: function(text) {
                    return text.length > 0
                }
            },
            message: 'Please enter a valid Zip Code.'
        },
        phoneNumber: {
            type: String,
            validate: {
                validator: function(text) {
                    return text.length > 0
                }
            },
            message: 'Please enter a valid Phone Number.'
        },
        emailAddress: {
            type: String,
            validate: {
                validator: function(text) {
                    return text.length > 0
                }
            },
            message: 'Please enter a valid Email Address.'
        }
    }
}))