const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    id: [],
    last_name: String,
    first_name: String,
    email: String
})

mongoose.model('user', userSchema)