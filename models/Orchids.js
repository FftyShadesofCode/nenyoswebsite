const mongoose = require('mongoose')
const {Schema} = mongoose

const orchidSchema = new Schema({
    growerName: String,
    orchidGenera: String,
    orchidSpecies: String,
    fragrance: String,
    heat: String,
    humidity: String,
    light: String,
    water: String,
    careInfo: String,
    image: []
})

mongoose.model('orchids', orchidSchema)