const mongoose = require('mongoose')
const crypto = require('crypto')

const growerSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            trim: true,
            required: true,
            maxLength: 75,
            unique: true,
            index: true
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
            maxLength: 75,
            unique: true,
            index: true
        }
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    profile: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    about: {
        type: String
    },
    role: {
        type: Number,
        trim: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
},
    {timestamp: true}
)

growerSchema.virtual('password')
    .set(function(password) {
        this.hashed_password = password

        this.salt = this.makeSalt()

        this.password = this.encryptPassword(password)
    })
    .get(function() {
        return this.password
    })

growerSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.password
    },
    encryptPassword: function(password) {
        if(!password) return ''
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },

    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}

module.exports = mongoose.model('Grower', growerSchema)