const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orchidSchema = new Schema({
    orchidGenera: {
        type: String,
        required: true
    },
    orchidSpecies: {
        type: String,
        required: true
    },
    basicInfo: {
        fragrant: {
            type: String,
            required: true
        }
    },
    careInfo: {
        temp: {
            type: String,
            required: true
        },
        lightIntensity: {
            type: String,
            required: true
        },
        lightType: {
            type: String,
            required: true
        },
        water: {
            type: String,
            required: true
        },
        humidity: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('Orchid', orchidSchema)