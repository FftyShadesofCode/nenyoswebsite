const mongoose = require('mongoose')

const Schema = mongoose.Schema
const OrchidPostSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    orchid: {
        orchidGenera: String,
        orchidSpecies: String,
        basicInformation: {
            fragrant: String,
            careInformation: {
                water: String,
                lightIntensity: String,
                lightType: String,
                temp: String,
                humidity: String
            },
            images: String,
        },
        date: {
            type: String,
            default: Date.now()
        }
    }
})

module.exports = mongoose.model('OrchidPost', OrchidPostSchema)